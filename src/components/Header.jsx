import React from 'react';
import '../styles/Header.css';
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