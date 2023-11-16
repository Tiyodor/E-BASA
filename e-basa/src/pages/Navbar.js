import React from 'react';



function Navbar() {
  return (
    <div className="topnav">
      <a className="active" href="/Home">
        <img src="/assets/imgs/nav-logo.png" alt="Home" />
      </a>
      <a className="active" href="/Ranks">
        <img src="/assets/imgs/trophy.png" alt="trophy" id="trophy-image" />
      </a>
      <a className="active" href="#puntos">
        <img src="/assets/imgs/puntos.png" alt="puntos" id="puntos-image" />
      </a>
      <div className="user-search-container">
        <div className="search-bar">
          <input type="text" id="search-input" />
          <img src="/assets/imgs/search-logo.png" id="search-button" alt="Search" />
        </div>
        <a className="active" href="/Profile">
          <img src="/assets/imgs/user-icon.png" alt="user-icon" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
