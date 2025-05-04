// src/pages/NewsPage.jsx
import React from "react";
import { Header, Footer } from "../components/layout";
import { RoundedCard } from "../components/ui/Card";
import "../styles/pages/newspage.css";

const NewsPage = () => {
  return (
    <div className="news-page">
      <Header />
      
      <div className="container">
        <div className="page-header">
          <div className="header-text">То, о чем хочется написать.</div>
          <h1 className="page-title">СТАТЬИ И НОВОСТИ</h1>
        </div>
        
        <div className="news-grid">
          {/* Создаем сетку из 25 карточек (5 рядов по 5 карточек) */}
          {Array.from({ length: 25 }).map((_, index) => (
            <RoundedCard 
              key={index}
              title="Название"
              date="Дата"
              to="/статьи-фул-хд"
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NewsPage;