import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropsTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <p>Loading.....</p>;
  if (user) return children;

  return <Navigate to="/login" state={location.pathname} replace={true} />;
};

PrivateRoute.propTypes = {
  children: PropsTypes.node,
};

export default PrivateRoute;
