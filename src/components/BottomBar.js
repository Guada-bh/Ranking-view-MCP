import React from 'react';
import './BottomBar.css';

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <div className="bottom-content">
        <div className="logo-section">
          <div className="logo-icon"></div>
          <div className="logo-text">RankingApp</div>
        </div>
        
        <div className="links-section">
          <div className="links-row">
            <span>Inicio</span>
            <span>Rankings</span>
            <span>Comparar</span>
          </div>
          <div className="links-row">
            <span>Favoritos</span>
            <span>Perfil</span>
            <span>Configuración</span>
          </div>
        </div>
        
        <div className="footer-text">
          <p>© 2024 RankingApp. Todos los derechos reservados.</p>
          <p>Información actualizada diariamente por nuestro equipo de expertos.</p>
        </div>
      </div>
      
      <div className="bottom-nav">
        <div className="nav-item">
          <div className="nav-icon"></div>
          <span>Inicio</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon"></div>
          <span>Rankings</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon"></div>
          <span>Buscar</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon"></div>
          <span>Favoritos</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon"></div>
          <span>Perfil</span>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
