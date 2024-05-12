import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import AddServices from "../pages/AddServices";
import ServicesDetails from "../pages/ServicesDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
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
        element: (
          <PrivateRoute>
            <AddServices />
          </PrivateRoute>
        ),
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
      {
        path: "/services-details",
        element: (
          <PrivateRoute>
            <ServicesDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
