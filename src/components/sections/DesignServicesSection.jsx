// src/components/sections/DesignServicesSection.jsx
import React from "react";
import "../../styles/components/design-services-section.css";

const DesignServicesSection = () => {
  const designServices = [
    {
      title: "Дизайн квартиры",
      image: "/img/apartment-design.jpg"
    },
    {
      title: "Выполненных проектов",
      count: "110+",
      isCounter: true
    },
    {
      title: "Дизайн жилых интерьеров",
      image: "/img/residential-design.jpg",
      isLarge: true
    },
    {
      title: "Реализация «под ключ» от А до Я",
      image: "/img/turnkey-realization.jpg"
    },
    {
      title: "Дизайн коммерческих объектов",
      image: "/img/commercial-design.jpg"
    }
  ];

  return (
    <section className="design-services-section">
      <div className="container">
        <div className="design-services-grid">
          {designServices.map((service, index) => (
            <div 
              key={index} 
              className={`design-service-card ${service.isLarge ? 'large' : ''} ${service.isCounter ? 'counter' : ''}`}
            >
              {service.isCounter ? (
                <div className="counter-content">
                  <span className="counter-number">{service.count}</span>
                  <span className="counter-text">{service.title}</span>
                </div>
              ) : (
                <>
                  {service.image && (
                    <div className="service-image">
                      <img src={service.image} alt={service.title} />
                    </div>
                  )}
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignServicesSection;