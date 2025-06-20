import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import type { RootState } from "../redux/store";

export default function RequireAuth() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.userReducer.isAuthenticated
  );
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={"auth/login"} state={{ from: location }} replace />;
  }
  return <Outlet />;
}
