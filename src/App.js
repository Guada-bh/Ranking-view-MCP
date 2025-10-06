import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import RankingCard from './components/RankingCard';
import AdBanner from './components/AdBanner';
import ContentSection from './components/ContentSection';
import BottomBar from './components/BottomBar';
import './App.css';

function App() {
  const rankingData = [
    {
      id: 1,
      rank: 1,
      title: "iPhone 15 Pro Max",
      description: "El smartphone más avanzado de Apple con chip A17 Pro, cámara de 48MP y pantalla Super Retina XDR de 6.7 pulgadas.",
      votes: 1250,
      worldVotes: 890,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=140&h=175&fit=crop&crop=center",
      carouselImages: [
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=32&h=40&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=32&h=40&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=32&h=40&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=32&h=40&fit=crop&crop=center"
      ],
      features: ["Muy resistente", "Es altamente sumergible", "Pantalla grande"],
      location: "Disponible en tiendas Apple"
    },
    {
      id: 2,
      rank: 2,
      title: "Samsung Galaxy S24 Ultra",
      description: "El flagship de Samsung con S Pen, cámara de 200MP y pantalla Dynamic AMOLED 2X de 6.8 pulgadas.",
      votes: 980,
      worldVotes: 720,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=140&h=175&fit=crop&crop=center",
      carouselImages: [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=32&h=40&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=32&h=40&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=32&h=40&fit=crop&crop=center"
      ],
      features: ["S Pen incluido", "Cámara profesional", "Batería de larga duración"],
      location: "Disponible en Samsung Store"
    },
    {
      id: 3,
      rank: 3,
      title: "Google Pixel 8 Pro",
      description: "El smartphone de Google con IA avanzada, cámara de 50MP y pantalla LTPO OLED de 6.7 pulgadas.",
      votes: 750,
      worldVotes: 560,
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=140&h=175&fit=crop&crop=center",
      carouselImages: [
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=32&h=40&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=32&h=40&fit=crop&crop=center"
      ],
      features: ["IA de Google", "Fotos perfectas", "Android puro"],
      location: "Disponible en Google Store"
    },
    {
      id: 4,
      rank: 4,
      title: "OnePlus 12",
      description: "El smartphone premium de OnePlus con Snapdragon 8 Gen 3, cámara Hasselblad y pantalla Fluid AMOLED.",
      votes: 620,
      worldVotes: 480,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=140&h=175&fit=crop&crop=center",
      carouselImages: [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=32&h=40&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=32&h=40&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=32&h=40&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=32&h=40&fit=crop&crop=center"
      ],
      features: ["Carga súper rápida", "Hasselblad", "OxygenOS"],
      location: "Disponible en OnePlus Store"
    },
    {
      id: 5,
      rank: 5,
      title: "Xiaomi 14 Ultra",
      description: "El smartphone fotográfico de Xiaomi con Leica, cámara de 50MP y pantalla AMOLED de 6.73 pulgadas.",
      votes: 580,
      worldVotes: 420,
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=140&h=175&fit=crop&crop=center",
      carouselImages: [
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=32&h=40&fit=crop&crop=center"
      ],
      features: ["Leica", "Carga inalámbrica", "MIUI"],
      location: "Disponible en Xiaomi Store"
    },
    {
      id: 6,
      rank: 6,
      title: "Huawei P60 Pro",
      description: "El smartphone premium de Huawei con cámara XMAGE, pantalla OLED de 6.67 pulgadas y HarmonyOS.",
      votes: 520,
      worldVotes: 380,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=140&h=175&fit=crop&crop=center",
      carouselImages: [
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=32&h=40&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=32&h=40&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=32&h=40&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=32&h=40&fit=crop&crop=center"
      ],
      features: ["XMAGE", "HarmonyOS", "Diseño elegante"],
      location: "Disponible en Huawei Store"
    }
  ];

  return (
    <div className="app">
      <TopBar />
      <Header />
      
      <div className="body">
        <AdBanner />
        
        <div className="container">
          {rankingData.map((item) => (
            <RankingCard key={item.id} data={item} />
          ))}
        </div>
        
        <AdBanner />
        
        <ContentSection />
        
        <AdBanner />
      </div>
      
      <BottomBar />
    </div>
  );
}

export default App;
