import { RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import Register from "./pages/Register";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      { path: "login", element: <Login /> },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];
