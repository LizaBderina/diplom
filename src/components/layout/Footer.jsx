import React from "react";
import "./styles.css";

export const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      {/* ЛОГОТИП */}
      <a href="/" className="logo-link">
        <img
          src="/icons/logo.svg"
          alt="Студия дизайна Александра Батенькова"
          className="footer-logo"
        />
      </a>
      {/* ТЕЛЕФОН */}
      <div className="contact-number">8-800-555-35-35</div>
      {/* СОЦСЕТИ */}
      <div className="footer-social-container">
        <div className="social-icons">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Telegram"
          >
            <img
              src="/icons/telegram.svg"
              alt="Telegram"
              className="social-icon"
            />
          </a>
          <a
            href="https://vk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="VK"
          >
            <img
              src="/icons/vk.svg"
              alt="VK"
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-divider"></div>
    <div className="footer-bottom">
      <div className="footer-copyright">
        © 2024 «Indesign» — сайт создан при поддержке студентов группы ИЭ-21:<br />
        Бедерина Елизавета &amp; Богданов Роман
      </div>
    </div>
  </footer>
);
