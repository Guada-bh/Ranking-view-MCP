import React from 'react';
import './ContentSection.css';

const ContentSection = () => {
  const contentData = [
    {
      id: 1,
      title: "Comparativa de Precios",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=167&h=167&fit=crop&crop=center",
      tag: "Análisis",
      views: "2.5k",
      comments: "180"
    },
    {
      id: 2,
      title: "Guía de Compra",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=167&h=167&fit=crop&crop=center",
      tag: "Tutorial",
      views: "1.8k",
      comments: "95"
    },
    {
      id: 3,
      title: "Reseñas de Usuarios",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=167&h=167&fit=crop&crop=center",
      tag: "Reviews",
      views: "3.2k",
      comments: "245"
    },
    {
      id: 4,
      title: "Especificaciones Técnicas",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=167&h=167&fit=crop&crop=center",
      tag: "Tech",
      views: "1.5k",
      comments: "67"
    }
  ];

  return (
    <div className="content-section">
      <div className="section-row">
        <div className="section-title">
          <div className="section-icon"></div>
          <h3>Contenido Relacionado</h3>
        </div>
        
        <div className="content-row">
          {contentData.map((item) => (
            <div key={item.id} className="content-card">
              <div className="card-image-container">
                <img src={item.image} alt={item.title} className="card-image" />
                <div className="card-tag">
                  <span>{item.tag}</span>
                </div>
              </div>
              <h4 className="card-title">{item.title}</h4>
              <div className="card-stats">
                <div className="stat">
                  <div className="stat-icon"></div>
                  <span>{item.views}</span>
                </div>
                <div className="stat">
                  <div className="stat-icon"></div>
                  <span>{item.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="section-row">
        <div className="section-title">
          <div className="section-icon"></div>
          <h3>Artículos Destacados</h3>
        </div>
        
        <div className="content-row">
          {contentData.map((item) => (
            <div key={`featured-${item.id}`} className="content-card">
              <div className="card-image-container">
                <img src={item.image} alt={item.title} className="card-image" />
                <div className="card-tag">
                  <span>{item.tag}</span>
                </div>
              </div>
              <h4 className="card-title">{item.title}</h4>
              <div className="card-stats">
                <div className="stat">
                  <div className="stat-icon"></div>
                  <span>{item.views}</span>
                </div>
                <div className="stat">
                  <div className="stat-icon"></div>
                  <span>{item.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
