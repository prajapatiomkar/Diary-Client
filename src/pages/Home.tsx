import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      Home
      <div className="">
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/register">register</Link>
      </div>
    </div>
  );
}
