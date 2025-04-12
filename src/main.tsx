import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes.tsx";

const router = createBrowserRouter(routes);
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router} />
  </Provider>
);
