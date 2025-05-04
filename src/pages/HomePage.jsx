// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "../components/layout";
import { ConsultationForm } from "../components/common";
import "../styles/pages/homepage.css";

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

      {/* Опыт */}
      <section className="experience-section">
        <div className="container">
          <h2 className="section-title">
            ПРОЕКТИРУЕМ ЧАСТНЫЕ И<br />КОММЕРЧЕСКИЕ ИНТЕРЬЕРЫ БОЛЕЕ 25 ЛЕТ
          </h2>
          
          <div className="stats-container">
            <div className="stats-box years-box">
              <div className="stats-number">25 лет</div>
              <div className="stats-description">Опыта в сфере архитектуры и дизайна</div>
            </div>
            
            <div className="stats-row">
              <div className="stats-box">
                <div className="stats-number">250+</div>
                <div className="stats-description">Проектов реализовано под личным контролем</div>
              </div>
              
              <div className="stats-box">
                <div className="stats-number">1500+</div>
                <div className="stats-description">Выполненных проектов</div>
              </div>
            </div>
            
            <div className="designer-container">
              <div className="designer-photo-wrapper">
                <img className="designer-photo" alt="Александр Батеньков" src="img/designer.png" />
              </div>
              
              <div className="designer-info">
                <h3 className="designer-name">Александр Батеньков</h3>
                <div className="designer-position">Главный дизайнер | Архитектор</div>
                <p className="designer-description">
                  Повелитель дизайнерского ремонта "под ключ"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Кому подходят услуги */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">УЗНАЙТЕ, КОМУ ПОДХОДЯТ НАШИ УСЛУГИ</h2>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="card-number">01</div>
              <div className="card-content">
                <h3 className="card-title">Если вы хотите эстетику</h3>
                <p className="card-description">
                  Над вашим проектом трудится целая команда профессионалов. каждый
                  специалист подбирается с учетом выбранного стиля и ваших
                  пожеланий!
                </p>
              </div>
            </div>
            
            <div className="service-card">
              <div className="card-number">02</div>
              <div className="card-title-wrapper">
                <h3 className="card-title">Вы взыскательны к качеству</h3>
                <p className="card-description">
                  Не потерпите работы "тяп-ляп" и слов "и так сойдет" от прораба.
                </p>
              </div>
            </div>
            
            <div className="service-card">
              <div className="card-number">03</div>
              <div className="card-content">
                <h3 className="card-title">Вам важна экспертность</h3>
                <p className="card-description">
                  Слышали от дизайнеров фразу: "Это не в моей компетенции,
                  спросите строителя"? Мы предоставляем сервис "одного окна", где
                  все специалисты работают над одним общим проектом.
                </p>
              </div>
            </div>
          </div>
          
          {/* Калькулятор */}
          <div className="calculator-section">
            <div className="calculator-header">
              <h3 className="calculator-title">Ответьте на 7 вопросов, чтобы рассчитать стоимость</h3>
              <div className="calculator-progress">
                <span className="current-step">1</span>/<span className="total-steps">7</span>
              </div>
            </div>
            
            <div className="calculator-body">
              <h4 className="calculator-question">Дизайн какого объекта вас интересует?</h4>
              <div className="calculator-options">
                <div className="calculator-option">
                  <button className="option-button">
                    <div className="option-image"></div>
                    <div className="option-label">Квартира</div>
                  </button>
                </div>
                <div className="calculator-option">
                  <button className="option-button">
                    <div className="option-image"></div>
                    <div className="option-label">Дом</div>
                  </button>
                </div>
                <div className="calculator-option">
                  <button className="option-button">
                    <div className="option-image"></div>
                    <div className="option-label">Коммерческое</div>
                  </button>
                </div>
              </div>
              <div className="calculator-controls">
                <button className="control-button prev-button" disabled>Назад</button>
                <button className="control-button next-button">Далее</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Реализованные проекты */}
      <section className="portfolio-section">
        <div className="container">
          <h2 className="section-title">РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</h2>
          
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-content">
                <h3 className="portfolio-title">Дизайн гостиной</h3>
                <p className="portfolio-description">Современный минимализм</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-content">
                <h3 className="portfolio-title">Дизайн спальни</h3>
                <p className="portfolio-description">Скандинавский стиль</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-content">
                <h3 className="portfolio-title">Дизайн кухни</h3>
                <p className="portfolio-description">Современная классика</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-content">
                <h3 className="portfolio-title">Дизайн ванной комнаты</h3>
                <p className="portfolio-description">Лофт</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-content">
                <h3 className="portfolio-title">Дизайн кабинета</h3>
                <p className="portfolio-description">Неоклассика</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-content">
                <h3 className="portfolio-title">Дизайн детской</h3>
                <p className="portfolio-description">Современный стиль</p>
              </div>
            </div>
          </div>
          
          <div className="portfolio-more">
            <p>Хотите увидеть больше объектов? Перейдите в раздел «Портфолио»</p>
            <Link to="/портфолио" className="portfolio-button">Портфолио</Link>
          </div>
        </div>
      </section>
      
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
      <section className="promo-banner">
        <div className="container">
          <div className="promo-content">
            <h2 className="promo-title">Создайте своё идеальное пространство с нашими экспертами!</h2>
            <div className="promo-button-container">
              <button className="promo-button">Покупай участок в коттеджном поселке бизнес-класса «ПАДОВЫ ОЗЁРА»</button>
            </div>
          </div>
        </div>
      </section>
      
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