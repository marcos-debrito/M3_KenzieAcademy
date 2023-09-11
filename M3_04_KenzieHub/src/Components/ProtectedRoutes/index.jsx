import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { dataUser } = useContext(UserContext);

  return dataUser ? <Outlet /> : <Navigate to="/" />;
};
