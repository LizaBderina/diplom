// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "../components/layout";
import ExperienceSection from "../components/sections/ExperienceSection";
import SimpleDesignServices from "../components/sections/SimpleDesignServices";
import ServicesSection from "../components/sections/ServicesSection";
import CalculatorSection from "../components/sections/CalculatorSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import "../styles/pages/homepage.css";
import PromoBanner from "../components/sections/PromoBanner";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />

      {/* Главный баннер */}
      <section className="main-banner">
        <div className="container">
          <div className="banner-content">
            <h2 className="main-title">
              ДИЗАЙНЫ ИНТЕРЬЕРА<br />
              И РЕАЛИЗАЦИЯ "ПОД<br />
              КЛЮЧ"
            </h2>
            <button className="order-button">Заказать</button>
          </div>
          <div className="banner-images">
            <div className="image-container">
              <img className="banner-image bedroom" alt="Спальня" src="img/bedroom.png" />
              <img className="banner-image kitchen" alt="Кухня" src="img/kitchen.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Секция опыта */}
      <ExperienceSection />
      
      {/* Блок с услугами дизайна */}
      <SimpleDesignServices />
      
      {/* Кому подходят услуги */}
      <ServicesSection />
      
      {/* Калькулятор */}
      <section className="calculator-container">
        <div className="container">
          <CalculatorSection />
        </div>
      </section>
      
      {/* Реализованные проекты */}
      <PortfolioSection />
      
      {/* Наши преимущества */}
      <section className="advantages-section">
        <div className="container">
          <h2 className="section-title">НА РЫНКЕ МНОГО ДИЗАЙНЕРОВ И СТУДИЙ. ЧЕМ МЫ ЛУЧШЕ КОНКУРЕНТОВ?</h2>
          
          <div className="advantages-list">
            <div className="advantage-item">
              <div className="advantage-number">1</div>
              <div className="advantage-content">
                <h3 className="advantage-title">Дизайн под ваши желания</h3>
                <p className="advantage-description">
                  Фокус на вас, а не на нашем эго — за это нас ценят клиенты.
                </p>
              </div>
            </div>
            
            <div className="advantage-item">
              <div className="advantage-number">2</div>
              <div className="advantage-content">
                <h3 className="advantage-title">Проект без хлопот</h3>
                <p className="advantage-description">
                  Вы утверждаете смету и дизайн — всё остальное делаем мы.
                </p>
              </div>
            </div>
            
            <div className="advantage-item">
              <div className="advantage-number">3</div>
              <div className="advantage-content">
                <h3 className="advantage-title">25 лет, 110 объектов</h3>
                <p className="advantage-description">
                  Не уходим после проекта — доводим до финала, контролируем стройку.
                </p>
              </div>
            </div>
            
            <div className="advantage-item">
              <div className="advantage-number">4</div>
              <div className="advantage-content">
                <h3 className="advantage-title">
                  Высший уровень проектной документации
                </h3>
                <p className="advantage-description">
                  Чертежи уже на этапе дизайна — ремонт проходит быстрее и без ошибок.
                </p>
              </div>
            </div>
            
            <div className="advantage-item">
              <div className="advantage-number">5</div>
              <div className="advantage-content">
                <h3 className="advantage-title">
                  Подробный журнал комплектации в проекте
                </h3>
                <p className="advantage-description">
                  Всё, что нужно, уже в проекте — ничего искать не придётся.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Консультация */}
      <section className="consultation-section">
        <div className="container">
          <h2 className="section-title">КОНСУЛЬТАЦИЯ</h2>
          
          <div className="consultation-grid">
            <div className="consultation-item">
              <div className="consultation-number">1</div>
              <p className="consultation-text">
                Если квартира или дом еще не выбраны
              </p>
            </div>
            <div className="consultation-item">
              <div className="consultation-number">2</div>
              <p className="consultation-text">
                Сметистика
              </p>
            </div>
            <div className="consultation-item">
              <div className="consultation-number">3</div>
              <p className="consultation-text">
                Рекомендации по планировочному решению
              </p>
            </div>
            <div className="consultation-item">
              <div className="consultation-number">4</div>
              <p className="consultation-text">
                Бюджетирование
              </p>
            </div>
            <div className="consultation-item">
              <div className="consultation-number">5</div>
              <p className="consultation-text">
                Какие строители вам подойдут?
              </p>
            </div>
            <div className="consultation-item">
              <div className="consultation-number">6</div>
              <p className="consultation-text">
                Продолжительность консультации 1 час
              </p>
            </div>
          </div>
          
          <div className="consultation-form-container">
            <h3 className="form-title">КОНСУЛЬТАЦИЯ С ДИЗАЙНЕРОМ</h3>
            <p className="form-subtitle">Заполните форму и мы свяжемся с вами в ближайшее время!</p>
            
            <form className="consultation-form">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Ваше Имя" />
              </div>
              <div className="form-group">
                <input type="tel" className="form-control" placeholder="Телефон" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Площадь вашего объекта" />
              </div>
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" /> Согласен с условиями политики конфиденциальности данных
                </label>
              </div>
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" /> Даю согласие на обработку персональных данных
                </label>
              </div>
              <button type="submit" className="submit-button">Записаться на консультацию</button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Баннер с домом */}
      <PromoBanner />
      
      {/* Видеоблог и новости */}
      <section className="video-blog-section">
        <div className="container">
          <h2 className="section-title">ВИДЕОБЛОГ И НОВОСТИ</h2>
          
          <div className="video-grid">
            <div className="video-item video-item-large">
              <div className="video-content">
                <h3 className="video-title">ВИДЕО НАЗВАНИЕ и ссылка на ютуб</h3>
              </div>
            </div>
            <div className="video-item">
              <div className="video-content">
                <h3 className="video-title">Название</h3>
                <p className="video-date">Дата</p>
              </div>
            </div>
            <div className="video-item">
              <div className="video-content">
                <h3 className="video-title">Название</h3>
                <p className="video-date">Дата</p>
              </div>
            </div>
            <div className="video-item">
              <div className="video-content">
                <h3 className="video-title">Название</h3>
                <p className="video-date">Дата</p>
              </div>
            </div>
            <div className="video-item video-item-wide">
              <div className="video-content">
                <h3 className="video-title">ВИДЕО НАЗВАНИЕ и ссылка на ютуб</h3>
              </div>
            </div>
            <div className="video-item">
              <div className="video-content">
                <h3 className="video-title">Название</h3>
                <p className="video-date">Дата</p>
              </div>
            </div>
          </div>
          
          <div className="video-controls">
            <button className="video-control prev-button">Предыдущая</button>
            <button className="video-control next-button">Следующая</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;