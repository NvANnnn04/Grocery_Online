import React from 'react';
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
                    <input id="input-search" type="text" placeholder="Tìm kiếm sản phẩm" ></input>
                    <button>Tìm kiếm</button>
                  </div>
                  <div className="about-wrapper">
                    <div className="about-content">
                      <a href="">thực phẩm</a>
                      <a href="">thời trang</a>
                      <a href="">gia dụng</a>
                      <a href="">sức khỏe</a>
                      <a href="">thể thao</a>
                      <a href="">mẹ và bé</a>                  
                    </div>
                    <div className="sale-content">                                           
                        <span>Giá luôn ưu đãi</span>
                        <span>Sản phẩm chất lượng</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="nav">
                <div className="home-item">
                  <i class="fa-solid fa-house"></i>
                  <span>Trang chủ</span>
                </div>
                <div className="login">
                  <i class="fa-solid fa-door-open"></i>
                  <span>Đăng nhập</span>
                </div>
                <div className="cart">
                  <div className="cart-item">
                    <a>
                      <div className="cart-item">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span className="index-cart">0</span>
                      </div>
                    </a>
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