import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export const SocialIcons = ({ className }) => {
  return (
    <div className={`social-icons ${className || ""}`}>
      <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
        <img src="/img/vk-icon.svg" alt="VK" className="social-icon" />
      </a>
      <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
        <img src="/img/telegram-icon.svg" alt="Telegram" className="social-icon" />
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
        <img src="/img/instagram-icon.svg" alt="Instagram" className="social-icon" />
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
        <img src="/img/youtube-icon.svg" alt="YouTube" className="social-icon" />
      </a>
      <a href="https://rutube.ru/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
        <img src="/img/rutube-icon.svg" alt="Rutube" className="social-icon" />
      </a>
      <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
        <img src="/img/pinterest-icon.svg" alt="Pinterest" className="social-icon" />
      </a>
      <a href="https://wa.me/79120456898" target="_blank" rel="noopener noreferrer" className="social-icon-link">
        <img src="/img/whatsapp-icon.svg" alt="WhatsApp" className="social-icon" />
      </a>
    </div>
  );
};

SocialIcons.propTypes = {
  className: PropTypes.string
};