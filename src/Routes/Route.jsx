import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Register from "../Components/Register";
import Home from "../Components/Home";
import Login from "../Components/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);
