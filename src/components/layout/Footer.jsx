// src/components/layout/Footer.jsx
import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { Link } from "react-router-dom";

export const Footer = ({ className }) => {
  return (
    <div className={`footer ${className || ""}`}>
      <div className="footer-content">
        <Link to="/full-hd-liza" className="logo-link">
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
      
      <div className="footer-divider" />
      
      <div className="footer-copyright">
        © 2024 "Indesign" - сайт создан при поддержки студентов группы ИЭ-21: Бедериной Елизаветы &amp; Богданова Романа
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};