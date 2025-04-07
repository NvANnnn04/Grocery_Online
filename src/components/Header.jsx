import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
function Header() {
  return (
    <header className='header'>
        <div className="header-wrraper">
          <div className="header-wrraper-cpn">
            <div className="header-components">
              <div className="logo">
                <div className="logo-wrraper">
                  <img src='/imgs/logo.jpeg' alt='Ảnh logo' />
                </div>
              </div>
              <div className="search">
                <div className="search-box">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <div className="data-input">
                    <input 
                    id="input-search" 
                    type="text" 
                    placeholder="Tìm kiếm sản phẩm" 
                    autoComptele="off"
                    />
                    <button>Tìm kiếm</button>
                  </div>
                  <div className="about-wrapper">
                    <div className="about-content">
                      <Link to="/thucpham">thực phẩm</Link>
                      <Link to="/thoitrang">thời trang</Link>
                      <Link to="/giadung">gia dụng</Link>
                      <Link to="/suckhoe">sức khỏe</Link>
                      <Link to="/thethao">thể thao</Link>
                      <Link to="/dochoi">mẹ và bé</Link>                  
                    </div>
                    <div className="sale-content">                                           
                        <span>Giá luôn ưu đãi</span>
                        <span>Sản phẩm chất lượng</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="nav">
                <Link to='/' className="home-item">
                  <i className="fa-solid fa-house"></i>
                  <span>Trang chủ</span>
                </Link>
                <Link to="/login" className="login">
                  <i className="fa-solid fa-door-open"></i>
                  <span>Đăng nhập</span>
                </Link>
                <div className="cart">
                  <div className="cart-item">
                    <Link to="/cart" className="cart-item">
                      <i className="fa-solid fa-cart-shopping"></i>
                      <span className="index-cart">0</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
}
export default Header;