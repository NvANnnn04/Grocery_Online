import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "../layouts/Layout.jsx";
import HomeMenu from "../components/HomeMenu.jsx";
import Header from "../components/Header.jsx";
import Register from "../components/Register.jsx";
import Home from "../views/home.jsx";
import ThucPham from "../views/ThucPham.jsx";
import DoChoi from "../views/DoChoi.jsx";
import ThietBi from "../views/ThietBi.jsx";
import GiaDinh from "../views/GiaDinh.jsx";
import SucKhoe from "../views/SucKhoe.jsx";
import ThoiTrang from "../views/ThoiTrang.jsx";
import PhuKien from "../views/PhuKien.jsx";
import DongHo from "../views/DongHo.jsx";
import Sach from "../views/Sach.jsx";
import TheThao from "../views/TheThao.jsx";
import Login from "../views/Login.jsx";
import "../styles/Router.css";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/thucpham" element={<ThucPham />} />
            <Route path="/dochoi" element={<DoChoi />} />
            <Route path="/thietbi" element={<ThietBi />} />
            <Route path="/giadung" element={<GiaDinh />} />
            <Route path="/suckhoe" element={<SucKhoe />} />
            <Route path="/thoitrang" element={<ThoiTrang />} />
            <Route path="/phukien" element={<PhuKien />} />
            <Route path="/dongho" element={<DongHo />} />
            <Route path="/sach" element={<Sach />} />
            <Route path="/thethao" element={<TheThao />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/dangky" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
