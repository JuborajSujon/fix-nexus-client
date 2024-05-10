import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
      {
        path: "/login",
        element: <div>Login</div>,
      },
      {
        path: "/register",
        element: <div>Register</div>,
      },
    ],
  },
]);

export default router;
