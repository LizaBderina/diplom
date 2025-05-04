// src/components/sections/SimpleDesignServices.jsx
import React from "react";
import "../../styles/components/simple-design-services.css";

const SimpleDesignServices = () => {
  return (
    <section className="simple-design-services">
      <div className="simple-container">
        <div className="simple-grid">
          {/* Вытянутая карточка слева */}
          <a
            href="#interior-designer-questionnaire"
            className="card-link simple-card simple-large"
            style={{
              backgroundImage: 'url("/img/residential-interior.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="simple-overlay"></div>
            <h3 className="simple-title">Дизайн жилых интерьеров</h3>
          </a>

          {/* Правая колонка с двумя карточками */}
          <div className="simple-right-column">
            {/* Верхняя карточка справа */}
            <a
              href="#interior-designer-questionnaire"
              className="card-link simple-card"
              style={{
                backgroundImage: 'url("/img/commercial-interior.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="simple-overlay"></div>
              <h3 className="simple-title">Дизайн коммерческих объектов</h3>
            </a>

            {/* Нижняя карточка справа */}
            <a
              href="#interior-designer-questionnaire"
              className="card-link simple-card"
              style={{
                backgroundImage: 'url("/img/turnkey-service.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="simple-overlay"></div>
              <h3 className="simple-title">Реализация «под ключ» от А до Я</h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleDesignServices;
