import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";

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
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/services",
        element: <div>Services</div>,
      },
      {
        path: "/add-service",
        element: <div>Add Service</div>,
      },
      {
        path: "/manage-service",
        element: <div>Manage Service</div>,
      },
      {
        path: "/booked-services",
        element: <div>Booked Services</div>,
      },
      {
        path: "/service-to-do",
        element: <div>Service To Do</div>,
      },
    ],
  },
]);

export default router;
