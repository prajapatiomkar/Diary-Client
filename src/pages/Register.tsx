import { useState } from "react";
import { useRegisterMutation } from "../features/api/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [register, { isLoading, isSuccess, error }] = useRegisterMutation();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await register({ email, username, password }).unwrap();
      console.log("Registration successful:", result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={submit}>
      <input onChange={(e) => setUsername(e.target.value)} value={username} />
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button type="submit">Register</button>
      {isSuccess && <p>Registration successful!</p>}
      {error && <p>Error while registering</p>}
    </form>
  );
}
