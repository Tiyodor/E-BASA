import React from 'react';

function Sidenav() {
  return (
    <div className="sidenav">
      <a className="active" href="#menu">
        <img src="/assets/imgs/menubt.png" alt="menu" id="menubt-image" />
      </a>

      <a className="active" href="#home">
        <img src="/assets/imgs/homebt.png" alt="homebt" id="homebt-image" />
      </a>

      <a className="active" href="#sound">
        <img src="/assets/imgs/soundbt.png" alt="soundbt" id="soundbt-image" />
      </a>

      <a className="active" href="#setting">
        <img src="/assets/imgs/settingbt.png" alt="settingbt" id="settingbt-image" />
      </a>
    </div>
  );
}

export default Sidenav;
