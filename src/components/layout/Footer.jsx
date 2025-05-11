// src/components/layout/Footer.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.css";

export const Footer = ({ className }) => (
  <footer className={`footer ${className || ""}`}>
    {/* Верхняя часть футера: логотип и социальные ссылки */}
    <div className="container footer-inner">
      <Link to="/" className="logo-link">
        <img
          src="/icons/logo.svg"
          alt="Александра Батенькова"
          className="footer-logo"
        />
      </Link>

      <div className="footer-social-container">
        <div className="contact-number">8-800-555-35-35</div>
        <div className="social-icons">
          <a
            className="social-link telegram-link"
            href="https://t.me/batenkov_stroyka_proekty"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="social-icon"
              alt="Telegram"
              src="/img/free-icon-telegram-2111710.png"
            />
          </a>
          <a
            className="social-link vk-link"
            href="https://vk.com/designer_batenkov?from=search"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="social-icon"
              alt="ВКонтакте"
              src="/img/free-icon-message-15047438.png"
            />
          </a>
        </div>
      </div>
    </div>

    {/* Разделитель */}
    <div className="footer-divider" />

    {/* Нижняя часть футера: копирайт */}
    <div className="container footer-inner footer-bottom">
      <small className="footer-copyright">
        © 2024 «Indesign» — сайт создан при поддержке студентов группы ИЭ-21:
        Бедерина Елизавета &amp; Богданов Роман
      </small>
    </div>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: "",
};
