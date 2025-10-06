import React from 'react';
import './RankingCard.css';

const RankingCard = ({ data }) => {
  const { rank, title, description, votes, worldVotes, image, carouselImages, features, location } = data;

  return (
    <div className="ranking-card">
      <div className="card-image">
        <img src={image} alt={title} className="main-image" />
        <div className="carousel">
          {carouselImages.map((img, index) => (
            <img key={index} src={img} alt={`${title} ${index + 1}`} className="carousel-image" />
          ))}
        </div>
      </div>
      
      <div className="card-content">
        <div className="content-top">
          <div className="title-section">
            <div className="rank-number">{rank}</div>
            <h3 className="card-title">{title}</h3>
            <div className="more-icon"></div>
          </div>
          
          <div className="votes-section">
            <div className="world-votes">
              <div className="avatars">
                <div className="avatar">A</div>
                <div className="avatar">IM</div>
                <div className="avatar">★</div>
                <div className="avatar">★</div>
              </div>
              <span className="votes-text">{votes} mil</span>
            </div>
            <div className="world-votes-badge">
              <div className="avatar">✋</div>
              <span className="votes-text">{worldVotes}</span>
            </div>
          </div>
        </div>
        
        {features && (
          <div className="superstar-section">
            <div className="star-icon"></div>
            <span className="superstar-text">{features[0]} (+{features.length - 1})</span>
          </div>
        )}
        
        <div className="description-section">
          <p className="card-description">{description}</p>
        </div>
        
        {location && (
          <div className="location-section">
            <div className="location-icon"></div>
            <span className="location-text">{location}</span>
          </div>
        )}
        
        <div className="buttons-section">
          <button className="primary-button">
            <span>Votar</span>
            <div className="button-icon">+</div>
          </button>
          <button className="secondary-button">
            <span>Ver precio</span>
            <div className="button-icon">🛒</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RankingCard;
