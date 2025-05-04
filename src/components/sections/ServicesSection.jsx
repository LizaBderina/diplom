// src/components/sections/ServicesSection.jsx
import React from "react";
import "../../styles/components/services-section.css";

const ServicesSection = () => {
  const services = [
    {
      number: "01",
      title: "Если вы хотите эстетику",
      description: "Над вашим проектом трудится целая команда профессионалов. каждый специалист подбирается с учетом выбранного стиля и ваших пожеланий!"
    },
    {
      number: "02",
      title: "Вы взыскательны к качеству",
      description: "Не потерпите работы \"тяп-ляп\" и слов \"и так сойдет\" от прораба."
    },
    {
      number: "03",
      title: "Вам важна экспертность",
      description: "Слышали от дизайнеров фразу: \"Это не в моей компетенции, спросите строителя\"? Мы предоставляем сервис \"одного окна\", где все специалисты работают над одним общим проектом."
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">УЗНАЙТЕ, КОМУ ПОДХОДЯТ НАШИ УСЛУГИ</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="card-number">{service.number}</div>
              <div className="card-content">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;