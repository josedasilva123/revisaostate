import React from "react";
import { Routes, Route } from "react-router-dom";
import PageLoading from "./components/PageLoading";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PageHome from "./pages/Home";
import PageLogin from "./pages/Login";
import PageRegister from "./pages/Register";

const AppRoutes = () => {
 /* Outlet podem ser utilizado para escalar regras lógicas para multiplas rotas */
  return (    
    <Routes>
      <Route path="/" element={<PageLoading />}>
        <Route index element={<PageLogin />} />
        <Route path="/register/" element={<PageRegister />} />
        <Route path="/dashboard" element={<ProtectedRoutes />}>
          <Route index element={<PageHome />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
