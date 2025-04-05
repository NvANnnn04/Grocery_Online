import React from 'react';
import Menubar from '../components/Menu.jsx';
import Maincontent from '../components/Maincontent.jsx';
import Header from '../components/Header.jsx';
import '../styles/Home.css'; 
import '../styles/Global.css'
function Home() {
  return (
    <div className="home">
      <Header />
      <div className="layout">
        <Menubar />
        <Maincontent />
      </div> 
    </div>
  );
}

export default Home;
