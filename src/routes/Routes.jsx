import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import AddServices from "../pages/AddServices";
import ServicesDetails from "../pages/ServicesDetails";
import PurchaseConfirm from "../pages/PurchaseConfirm";
import ManageServices from "../pages/ManageServices";

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
        element: (
          <PrivateRoute>
            <ManageServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/booked-services",
        element: (
          <PrivateRoute>
            <div>Booked Services</div>
          </PrivateRoute>
        ),
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
      {
        path: "/purchase",
        element: (
          <PrivateRoute>
            <PurchaseConfirm />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
