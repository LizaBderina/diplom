// src/pages/BlogPage.jsx
import React from "react";
import { Header, Footer } from "../components/layout";
import { ConsultationForm } from "../components/common";
import "../styles/pages/blogpage.css";

const BlogPage = () => {
  return (
    <div className="blog-page">
      <Header />
      
      <div className="container">
        <div className="blog-intro">
          <div className="blog-quote">
            <p>
              На рынке очень много дизайнеров интерьера, говорящих о себе: «мы опытные».
              На деле же мало кто может показать свои объекты, выполненные «под ключ», интервью с клиентами и отзывы.
            </p>
            <p>
              Почему так? Потому что эти «дизайнеры» рисуют картинки, а стройки боятся как огня.
              Посмотрите мой видеоблог, выводы сделайте сами.
            </p>
          </div>
        </div>
        
        <h2 className="blog-title">ВИДЕОБЛОГ</h2>
        <div className="blog-subtitle">Обзоры интерьеров. Интервью с заказчиками. Обзоры Европейских выставок.</div>
        
        <div className="video-grid">
          <div className="video-card">ВИДЕО НАЗВАНИЕ и ссылка на ют</div>
          <div className="video-card">ВИДЕО НАЗВАНИЕ и ссылка на ют</div>
          <div className="video-card">ВИДЕО НАЗВАНИЕ и ссылка на ют</div>
          <div className="video-card">ВИДЕО НАЗВАНИЕ и ссылка на ют</div>
          <div className="video-card">ВИДЕО НАЗВАНИЕ и ссылка на ют</div>
          <div className="video-card">ВИДЕО НАЗВАНИЕ и ссылка на ют</div>
        </div>
        
        <h3 className="social-title">ПОДПИШИТЕСЬ НА НАШИ СОЦИАЛЬНЫЕ СЕТИ</h3>
        <div className="social-text">
          Следите за нашими проектами в онлайн-режиме: истории с клиентами, готовые дизайн-проекты и объекты «под ключ», советы и разборы ошибок!
        </div>
        
        <div className="social-icons">
          <a href="#" className="social-icon instagram"></a>
          <a href="#" className="social-icon telegram"></a>
          <a href="#" className="social-icon whatsapp"></a>
          <a href="#" className="social-icon youtube"></a>
          <a href="#" className="social-icon rutube"></a>
          <a href="#" className="social-icon pinterest"></a>
        </div>
        
        <h2 className="exhibitions-title">МОИ ОБЗОРЫ ЕВРОПЕЙСКИХ ВЫСТАВОК</h2>
        <div className="exhibitions-text">Как я ездил на iSaloni, и другие известные интерьерные выставки.</div>
        
        <div className="video-grid">
          <div className="video-card">ВИДЕО НАЗВАНИЕ и ссылка на ют</div>
          <div className="video-card">ВИДЕО НАЗВАНИЕ и ссылка на ют</div>
          <div className="video-card">ВИДЕО НАЗВАНИЕ и ссылка на ют</div>
          <div className="video-card">ВИДЕО НАЗВАНИЕ и ссылка на ют</div>
        </div>
        
        <ConsultationForm />
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPage;