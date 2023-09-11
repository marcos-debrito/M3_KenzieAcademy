import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login/index.jsx";
import { RegisterPage } from "../pages/Register/index.jsx";
import { Toaster } from "react-hot-toast";
import { HubPage } from "../pages/HubPage/index.jsx";
import { ProtectedRoutes } from "../Components/ProtectedRoutes/index.jsx";

export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/hub" element={<HubPage />} />
        </Route>
      </Routes>

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
