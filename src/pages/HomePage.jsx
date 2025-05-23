// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "../components/layout";
import { ConsultationForm } from "../components/common/ConsultationForm"; // Импортируем компонент
import ExperienceSection from "../components/sections/ExperienceSection";
import SimpleDesignServices from "../components/sections/SimpleDesignServices";
import ServicesSection from "../components/sections/ServicesSection";
import CalculatorSection from "../components/sections/CalculatorSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import "../styles/pages/homepage.css";
import PromoBanner from "../components/sections/PromoBanner";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />

      <section className="main-banner">
        <div className="main-banner__inner">
          <div className="main-banner__text">
            <h1 className="main-title">
              ДИЗАЙНЫ<br />
              ИНТЕРЬЕРА<br />
              И РЕАЛИЗАЦИЯ<br />
              "ПОД КЛЮЧ"
            </h1>
            <button
              className="order-button"
              onClick={() => {
                const el = document.getElementById("calculator-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Заказать
            </button>
          </div>
          <div className="main-banner__images">
            <img
              className="main-banner__img main-banner__img--rect"
              alt="Интерьер спальни"
              src="img/bedroom.png"
              loading="lazy"
            />
            <img
              className="main-banner__img main-banner__img--square"
              alt="Интерьер кухни"
              src="img/kitchen.png"
              loading="lazy"
            />
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
      <section className="calculator-container" id="calculator-section">
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

      {/* Секция заказа дизайн-проекта - используем консультационную форму */}
      <section className="design-order-section">
        <div className="container">
          <ConsultationForm
            title="Заказать дизайн проект"
            subtitle="При заказе ремонта «под ключ», вы получаете дизайн-проект в подарок*"
            buttonText="Получить смету"
            withNote={true}
            noteText="* для помещений более 200 кв. м."
            className="design-order-form"
          />
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
            <NavLink to="/video-blog" className="dropdown-item"> Видеоблог</NavLink>
            <NavLink to="/новости" className="dropdown-item">Новости</NavLink>
          </div>
        </div>
      </section>
      {/* <div>
      <MapboxMap />
    </div>
    <div>
      <YandexMapReact />
    </div> */}
      <Footer />
    </div>
  );
};

export default HomePage;