// src/components/layout/Header.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { Logo } from "../common/Logo";
import "./styles.css";


export const Header = ({ className }) => {
  return (
    <div className={`header ${className || ""}`}>
      <Link to="/full-hd-liza" className="logo-link">
        <img 
          src="/icons/logo.svg" 
          alt="Александра Батенькова" 
          className="header-logo" 
        />
      </Link>
      
      <div className="header-contacts">
        <a href="tel:+74996539305" rel="noopener noreferrer" target="_blank">
          <span className="contact-link">+7 (499) 653-93-05</span>
        </a>
        <br />
        <a
          href="mailto:abatenkoff@mail.ru"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="contact-link">abatenkoff@mail.ru</span>
        </a>
      </div>
      
      <nav className="header-nav">
        <Link to="/full-hd-liza" className="nav-link">Дизайн</Link>
        <Link to="/ремонт" className="nav-link">Ремонт</Link>
        <Link to="/комплектация" className="nav-link">Комплектация</Link>
        <Link to="/портфолио" className="nav-link">Портфолио</Link>
        <Link to="/сотрудничество" className="nav-link">Сотрудничество</Link>
      </nav>
      
      <div className="social-button">
        <Link to="/соц-сети" className="social-button-link">Соц-сети</Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};