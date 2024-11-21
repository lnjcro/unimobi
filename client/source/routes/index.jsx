import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header/HeaderComponent";
import Footer from "../components/Footer/FooterComponent";
import Error from "../pages/Error";
import Unimobi from "../pages/Unimobi";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import PrivateRoute from "../components/PrivateRoute/SecuredComponent";
import Perfil from "../pages/Perfil";
import React from "react";

const RouterApp = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
        <Route path="/perfil" element={<Perfil />} />
        </Route>
        <Route path="/" exact element={<Home/>} />
        <Route path="/imovel/:slug" element={<Unimobi/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default RouterApp;