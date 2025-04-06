import React from 'react';
import Menubar from '../components/HomeMenu.jsx';
import Maincontent from '../components/Maincontent.jsx';
import Header from '../components/Header.jsx';
import '../styles/page/Home.css'; 
import '../styles/Global.css';
function Home() {
  return (
    <div className="home">
      <Header />
      <div className="layout-main">
        <div className="wrapper">
        <div className="menubar">
          <Menubar />
        </div>
        <div className="content">
          <Maincontent />
        </div>
        </div>
      </div> 
    </div>
  );
}

export default Home;
