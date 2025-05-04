// src/pages/CollaborationPage.jsx
import React from "react";
import { Header, Footer } from "../components/layout";
import "../styles/pages/collaborationpage.css";

const CollaborationPage = () => {
  return (
    <div className="collaboration-page">
      <Header />
      
      <div className="container">
        <h1 className="collab-title">Строили, строили и, наконец, построили!</h1>
        
        <p className="collab-description">
          По многочисленным просьбам трудящихся мы запускаем платные рекламные блоки
          ваших товаров. Рекламируем действительно качественные и хорошие материалы,
          которые используем сами, и они нам нравятся.
        </p>
        
        <h2 className="tools-title">МЫ РАСПОЛАГАЕМ СЛЕДУЮЩИМИ ИНСТРУМЕНТАМИ:</h2>
        
        <div className="tools-grid">
          <div className="tool-card">
            <img src="/img/instagram-preview.jpg" alt="Instagram" className="tool-image" />
            <div className="tool-info">
              <h3 className="tool-name">Инстаграм</h3>
              <p className="tool-stats">— 215 тыс. подписчиков<br />охваты видео от 300−500 тыс. человек</p>
            </div>
          </div>
          
          <div className="tool-card">
            <img src="/img/youtube-preview.jpg" alt="YouTube" className="tool-image" />
            <div className="tool-info">
              <h3 className="tool-name">Youtube</h3>
              <p className="tool-stats">— 110 тыс. подписчиков<br />охваты 300+ тыс. человек</p>
            </div>
          </div>
        </div>
        
        <h2 className="offers-title">ЧТО ПРЕДЛАГАЕМ:</h2>
        
        <div className="offers-list">
          <div className="offer-item">
            <div className="offer-name">Интеграция в ролик до 1,5 минут</div>
            <div className="offer-details">
              <ul>
                <li>Ролик размещается на YouTube, Инстаграм.</li>
                <li>В описании указываем ссылку на магазин или товар.</li>
                <li>Также производитель или магазин предоставляет всем кто обратится по промокоду от нас скидку (обсуждается отдельно).</li>
                <li>Если рекламодатель предоставляет весь видео материал самостоятельно (свой отснятый ролик), то стоимость 45 000 ₽</li>
              </ul>
            </div>
            <div className="offer-price">85 000 ₽</div>
          </div>
          
          <div className="offer-item">
            <div className="offer-name">Короткий вертикальный ролик до 1 минуты</div>
            <div className="offer-details">
              <ul>
                <li>Ролик посвящен магазину или товару.</li>
                <li>Ролик размещается в YouTube, Инстаграм.</li>
                <li>Также производитель или магазин предоставляет всем, кто обратится по промокоду от нас скидку (обсуждается отдельно).</li>
                <li>Если рекламодатель предоставляет весь видео материал самостоятельно (свой отснятый ролик), то стоимость 25 000 ₽.</li>
              </ul>
            </div>
            <div className="offer-price">45 000 ₽</div>
          </div>
          
          <div className="offer-item">
            <div className="offer-name">Пост в Telegram, YouTube, Инстаграм</div>
            <div className="offer-details">
              <ul>
                <li>Пост в одной социальной сети: Telegram, YouTube, Инстаграм.</li>
                <li>Если рекламодатель предоставляет весь видео, фото, текстовый материал самостоятельно, то стоимость 15 000 ₽.</li>
              </ul>
            </div>
            <div className="offer-price">25 000 ₽</div>
          </div>
        </div>
        
        <div className="collab-cta">
          <h2 className="cta-title">Приглашаем к сотрудничеству!</h2>
          <img src="img/batenkov_heart.png" alt="Дизайнер" className="designer-photo" />
          <a href="https://api.whatsapp.com/send/?phone=79120456898" className="whatsapp-button">
            Напишите нам в Ватсап
          </a>
        </div>
        
        <h3 className="social-title">Подпишитесь на наши социальные сети</h3>
        <p className="social-text">
          Следите за нашими проектами в онлайн-режиме: истории с клиентами,
          готовые дизайн-проекты и объекты «под ключ», советы и разборы ошибок!
        </p>
        
        <div className="social-icons">
          <a href="#" className="social-icon instagram"></a>
          <a href="#" className="social-icon telegram"></a>
          <a href="#" className="social-icon whatsapp"></a>
          <a href="#" className="social-icon youtube"></a>
          <a href="#" className="social-icon rutube"></a>
          <a href="#" className="social-icon pinterest"></a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CollaborationPage;