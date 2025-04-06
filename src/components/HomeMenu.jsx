import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Menu.css';

const menuItems = [
  { path: '/thucpham', label: 'Thực Phẩm' },
  { path: '/dochoi', label: 'Đồ Chơi - Mẹ & Bé' },
  { path: '/thietbi', label: 'Thiết Bị Số' },
  { path: '/giadung', label: 'Điện Gia Dụng' },
  { path: '/suckhoe', label: 'Làm Đẹp - Sức Khỏe' },
  { path: '/thoitrang', label: 'Thời Trang' },
  { path: '/phukien', label: 'Phụ Kiện Thời Trang' },
  { path: '/dongho', label: 'Đồng Hồ' },
  { path: '/sach', label: 'Sách' },
  { path: '/thethao', label: 'Thể Thao' },
];

const HomeMenu = () => {
  return (
    <nav className="menu">
      <h4 id="title">Danh mục</h4>
      <ul className="menu-list"> 
        {menuItems.map((item) => (
          <li className="menu-item" key={item.path}>
            <NavLink to={item.path}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HomeMenu;