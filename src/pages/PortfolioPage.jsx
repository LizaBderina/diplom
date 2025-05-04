// src/pages/PortfolioPage.jsx
import React from "react";
import { Header, Footer } from "../components/layout";
import { ProjectCard } from "../components/ui/Card";
import "../styles/pages/portfoliopage.css";

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <Header />
      
      <div className="container">
        <div className="portfolio-header">
          <div className="portfolio-intro">
            <p>Всего сделано более 1500 проектов.</p>
            <p>Здесь мы оставили самые, на наш взгляд, интересные.</p>
          </div>
          <h1 className="portfolio-title">ПОРТФОЛИО</h1>
        </div>
        
        <div className="portfolio-grid">
          {/* Создаем сетку из 10 проектов */}
          {Array.from({ length: 10 }).map((_, index) => (
            <ProjectCard 
              key={index}
              className="portfolio-item"
              title="Название"
              description="Описание"
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;