import React from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import HomeMenu from "../components/HomeMenu.jsx";
import "../styles/components/Header.css";
import "../styles/components/ImgCarousel.css";
import Danhmucthucpham from "../components/Danhmucthucpham.jsx";
import "../styles/components/Layout.css";
const Layout = () => {
  const location = useLocation();
  const path = location.pathname;
  const getBreadcrumbTitle = () => {
    switch (true) {
      case path === "/":
        return "Trang chủ";
      case path.startsWith("/thucpham"):
        return "Trang chủ > Thực phẩm";
      case path.startsWith("/dochoi"):
        return "Trang chủ > Đồ chơi";
      case path.startsWith("/thietbi"):
        return "Trang chủ > Thiết bị số";
      case path.startsWith("/giadung"):
        return "Trang chủ > Điện gia dụng";
      case path.startsWith("/suckhoe"):
        return "Trang chủ > Làm đẹp - Sức khỏe";
      case path.startsWith("/thoitrang"):
        return "Trang chủ > Thời trang";
      case path.startsWith("/phukien"):
        return "Trang chủ > Phụ kiện thời trang";
      case path.startsWith("/dongho"):
        return "Trang chủ > Đồng hồ";
      case path.startsWith("/sach"):
        return "Trang chủ > Sách";
      case path.startsWith("/thethao"):
        return "Trang chủ > Thể Thao";
    }
  };
  const renderMenu = () => {
    if (path.startsWith("/thucpham")) {
      return <Danhmucthucpham />;
    }
    return <HomeMenu />;
  };
  return (
    <div>
      <Header />
      <div className="layout-main">
        <div className="layout-content">
          <h4>{getBreadcrumbTitle()}</h4>
        </div>
        <div className="wrapper">
          <div className="menubar">{renderMenu()}</div>
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
