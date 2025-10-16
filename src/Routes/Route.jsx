import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Register from "../Components/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
