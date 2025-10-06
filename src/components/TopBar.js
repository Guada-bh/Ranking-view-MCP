import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <div className="status-bar">
          <div className="time">9:41</div>
          <div className="status-icons">
            <div className="signal-icon"></div>
            <div className="wifi-icon"></div>
            <div className="battery-icon"></div>
          </div>
        </div>
        <div className="navigation-bar">
          <div className="nav-content">
            <div className="back-button"></div>
            <div className="nav-title">Ranking</div>
            <div className="nav-actions">
              <div className="search-icon"></div>
              <div className="menu-icon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
