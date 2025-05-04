// src/components/sections/ExperienceSection.jsx
import React from "react";
import "../../styles/pages/homepage.css";
import "../../styles/components/experience-section.css";


const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <h2 className="section-title">
          ПРОЕКТИРУЕМ ЧАСТНЫЕ И<br />КОММЕРЧЕСКИЕ ИНТЕРЬЕРЫ БОЛЕЕ 25 ЛЕТ
        </h2>
        
        <div className="stats-container">
          {/* Первый большой блок - 25 лет */}
          <div className="stats-box years-box">
            <div className="stats-number">25 лет</div>
            <div className="stats-description">Опыта в сфере архитектуры и дизайна</div>
          </div>
          
          {/* Второй ряд - два столбца */}
          <div className="stats-main-row">
            {/* Левый столбец - два блока */}
            <div className="stats-column">
              <div className="stats-box">
                <div className="stats-number">250+</div>
                <div className="stats-description">Проектов реализовано под личным контролем</div>
              </div>
              
              <div className="stats-box">
                <div className="stats-number">1500+</div>
                <div className="stats-description">Выполненных проектов</div>
              </div>
            </div>
            
            {/* Правый столбец - фото и информация */}
            <div className="stats-right-column">
              <div className="designer-photo-wrapper">
                <img 
                  className="designer-photo" 
                  alt="Александр Батеньков" 
                  src="img/designer.jpeg
                  " 
                />
              </div>
              
              <div className="designer-info-box">
                <h3 className="designer-name">Александр Батеньков</h3>
                <div className="designer-position">Главный дизайнер | Архитектор</div>
                <p className="designer-description">
                  Повелитель дизайнерского ремонта "под ключ"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;