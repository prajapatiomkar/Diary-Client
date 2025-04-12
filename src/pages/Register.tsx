import { useEffect, useState } from "react";
import { useRegisterMutation } from "../features/api/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [register, { isLoading, isSuccess, error }] = useRegisterMutation();
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await register({ email, username, password }).unwrap();
      console.log("Registration successful:", result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (isSuccess) {
      alert("User Register Successfully! 🎉");
      navigate("/auth/login");
    }
  }, [isSuccess, navigate]);

  return (
    <form onSubmit={submit}>
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder="Username"
      />
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Email"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
      />
      <button type="submit">Register</button>
      {isSuccess && <p>Registration successful!</p>}
      {error && <p>Error while registering</p>}
      <p>
        Already User ? <Link to="/auth/login">Login</Link>
      </p>
    </form>
  );
}
