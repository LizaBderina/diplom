import React      from "react";
import PropTypes  from "prop-types";
import { NavLink } from "react-router-dom";   // ← заменили Link на NavLink
import "./styles.css";

export const Header = ({ className }) => {
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
        <a href="tel:+74996539305"  target="_blank" rel="noopener noreferrer">
          <span className="contact-link">+7 (499) 653-93-05</span>
        </a>
        <br />
        <a href="mailto:abatenkoff@mail.ru" target="_blank" rel="noopener noreferrer">
          <span className="contact-link">abatenkoff@mail.ru</span>
        </a>
      </div>

      {/* навигация */}
      <nav className="header-nav">
        <NavLink to="/full-hd-liza"  className="nav-link">Дизайн</NavLink>
        <NavLink to="/ремонт"        className="nav-link">Ремонт</NavLink>
        <NavLink to="/комплектация"  className="nav-link">Комплектация</NavLink>
        <NavLink to="/портфолио"     className="nav-link">Портфолио</NavLink>
        <NavLink to="/сотрудничество" className="nav-link">Сотрудничество</NavLink>
        {/* ↓ новый пункт меню */}
        <NavLink to="/video-blog"    className="nav-link">Видеоблог</NavLink>
      </nav>

      {/* соц-сети */}
      <div className="social-button">
        <NavLink to="/соц-сети" className="social-button-link">Соц-сети</NavLink>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};
