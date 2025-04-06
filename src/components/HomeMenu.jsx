import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Menu.css'
export default function Menu() {
  return (
    <nav className="menu">
      <h3 id="title">Danh mục</h3>
      <div className="menu-item">
        <Link to="/thucpham">Thực Phẩm</Link>
      </div>
      <div className="menu-item">
        <Link to="/dochoi">Đồ Chơi - Mẹ & Bé</Link>
      </div>
      <div className="menu-item">
        <Link to="/thietbi">Thiết Bị Số</Link>
      </div>
      <div className="menu-item">
        <Link to="/giadung">Điện Gia Dụng</Link>
      </div>
      <div className="menu-item">
        <Link to="/suckhoe">Làm Đẹp - Sức Khỏe</Link>
      </div>
      <div className="menu-item">
        <Link to="/thoitrang">Thời Trang</Link>
      </div>
      <div className="menu-item">
        <Link to="/phukien">Phụ Kiện Thời Trang</Link>
      </div>
      <div className="menu-item">
        <Link to="/dongho">Đồng Hồ</Link>
      </div>
      <div className="menu-item">
        <Link to="/sach">Sách</Link>
      </div>
      <div className="menu-item">
        <Link to="/thethao">Thể Thao</Link>
      </div>
    </nav>
  );
}
