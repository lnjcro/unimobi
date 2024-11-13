import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticate = () => localStorage.getItem('Yt');

  return isAuthenticate ? <Outlet /> : <Navigate to="/login"/>;
};

export default PrivateRoute;