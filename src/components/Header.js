import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <div className="logo-icon"></div>
        </div>
      </div>
      
      <div className="tags-section">
        <div className="badges">
          <div className="category-badge">
            <span>Smartphones</span>
          </div>
          <div className="metrics">
            <div className="ranking-info">
              <span>Top 10</span>
            </div>
            <div className="ranking-info">
              <span>2024</span>
            </div>
          </div>
        </div>
        <div className="share-container">
          <div className="share-icon"></div>
        </div>
      </div>
      
      <div className="title-section">
        <h1 className="main-title">
          Los Mejores Smartphones del 2024: Ranking Completo
        </h1>
      </div>
      
      <div className="description-section">
        <p className="description">
          Descubre cuáles son los smartphones más valorados por los usuarios este año. 
          Análisis completo de características, rendimiento y relación calidad-precio.
        </p>
      </div>
    </div>
  );
};

export default Header;
