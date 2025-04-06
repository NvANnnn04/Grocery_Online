import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeMenu from '../components/HomeMenu.jsx';
import Header from '../components/Header.jsx';
import Home from '../views/home.jsx';
import ThucPham from '../views/ThucPham.jsx';
import DoChoi from '../views/DoChoi.jsx';
import ThietBi from '../views/ThietBi.jsx';
import GiaDinh from '../views/GiaDinh.jsx';
import SucKhoe from '../views/SucKhoe.jsx';
import ThoiTrang from '../views/ThoiTrang.jsx';
import PhuKien from '../views/PhuKien.jsx';
import DongHo from '../views/DongHo.jsx';
import Sach from '../views/Sach.jsx';
import TheThao from '../views/TheThao.jsx';
import '../styles/Router.css'

function Router() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="layout-main">
          <div className="wrapper">
            <div className="menubar">
              <HomeMenu />
            </div>
            <div className="content">
              <Routes>
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
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Router;