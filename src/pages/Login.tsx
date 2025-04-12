import { useState } from "react";
import { useLoginMutation } from "../features/api/auth";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, isSuccess, error }] = useLoginMutation();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login({ email, password }).unwrap();
      console.log("Login successful:", result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={submit}>
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
      <button type="submit">Login</button>
      {isSuccess && <p>Login successful!</p>}
      {error && <p>Error while logging</p>}

      <p>
        New User ? <Link to="/auth/register">Register</Link>
      </p>
    </form>
  );
}
