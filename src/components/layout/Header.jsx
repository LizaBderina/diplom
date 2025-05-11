import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import CallbackModal from "../modals/CallbackModal";
import "./styles.css";

export const Header = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="header">
      {/* весь контент хедера в контейнере */}
      <div className="container header-inner">
        {/* логотип */}
        <NavLink to="/" className="logo-link">
          <img src="/icons/logo.svg" alt="Logo" className="header-logo" />
        </NavLink>

        {/* контакты */}
        <div className="header-contacts">
          <a href="tel:+74996539305" className="contact-link">
            +7 (499) 653-93-05
          </a>
          <br />
          <a href="mailto:abatenkoff@mail.ru" className="contact-link">
            abatenkoff@mail.ru
          </a>
        </div>

        {/* навигация */}
        <nav className="header-nav">
          <NavLink to="/full-hd-liza" className="nav-link">
            Дизайн
          </NavLink>

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

          <NavLink to="/комплектация" className="nav-link">
            Комплектация
          </NavLink>
          <div className="dropdown-container">
            <div className="nav-link dropdown-toggle">
              Коллекции
            </div>
            <div className="dropdown-menu">
              <NavLink to="/портфолио" className="dropdown-item">
                Портфолио
              </NavLink>
              <NavLink to="/video-blog" className="dropdown-item">
                Видеоблог
              </NavLink>
              <NavLink to="/новости" className="dropdown-item">
                Новости
              </NavLink>
            </div>
          </div>
          <NavLink to="/сотрудничество" className="nav-link">
            Сотрудничество
          </NavLink>

        </nav>

        {/* кнопка «Заказать звонок» */}
        <div className="callback-button">
          <button onClick={openModal} className="callback-button-link">
            Заказать звонок
          </button>
        </div>
      </div>

      {/* Модалка вызывается на том же уровне, что и .header-inner */}
      <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};
Header.defaultProps = {
  className: "",
};
