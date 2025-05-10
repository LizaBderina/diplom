import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import CallbackModal from "../modals/CallbackModal"; // Импортируем новый компонент
import "./styles.css";

export const Header = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`header ${className || ""}`}>
      {/* логотип */}
      <NavLink to="/full-hd-liza" className="logo-link">
        <img
          src="/icons/logo.svg"
          alt="Александра Батенькова"
          className="header-logo"
        />
      </NavLink>

      {/* контакты */}
      <div className="header-contacts">
        <a href="tel:+74996539305" target="_blank" rel="noopener noreferrer">
          <span className="contact-link">+7 (499) 653-93-05</span>
        </a>
        <br />
        <a href="mailto:abatenkoff@mail.ru" target="_blank" rel="noopener noreferrer">
          <span className="contact-link">abatenkoff@mail.ru</span>
        </a>
      </div>

      {/* навигация */}
      <nav className="header-nav">
        <NavLink to="/full-hd-liza" className="nav-link">Дизайн</NavLink>
        
        {/* Пункт с выпадающим меню */}
        <div className="dropdown-container">
          <div className="nav-link dropdown-toggle">Ремонт</div>
          <div className="dropdown-menu">
            <NavLink to="/ремонт-квартиры-под-ключ" className="dropdown-item">
              Ремонт квартиры под ключ
            </NavLink>
            <NavLink to="/ремонт-домов-под-ключ" className="dropdown-item">
              Ремонт домов под ключ
            </NavLink>
          </div>
        </div>
        
        <NavLink to="/комплектация" className="nav-link">Комплектация</NavLink>
        <NavLink to="/портфолио" className="nav-link">Портфолио</NavLink>
        <NavLink to="/сотрудничество" className="nav-link">Сотрудничество</NavLink>
        <NavLink to="/video-blog" className="nav-link">Видеоблог</NavLink>
      </nav>

      {/* Кнопка заказать звонок */}
      <div className="callback-button">
        <button onClick={openModal} className="callback-button-link">Заказать звонок</button>
      </div>

      {/* Используем новый компонент CallbackModal */}
      <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};