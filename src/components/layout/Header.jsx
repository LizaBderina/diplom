import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import CallbackModal from "../modals/CallbackModal";
import AuthModal from "./AuthModal";
import "./styles.css";

export const Header = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Для dropdown на мобиле (какой открыт)
  const [openDropdown, setOpenDropdown] = useState(null);

  // Управляем скроллом body при открытом меню
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
      setOpenDropdown(null);
    }
  }, [mobileMenuOpen]);

  // Закрываем side-menu при ресайзе на десктоп
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  // Для dropdown в side-menu
  const toggleDropdown = (key) =>
    setOpenDropdown(openDropdown === key ? null : key);

  return (
    <header className="header">
      <div className="container header-inner">
        {/* Логотип */}
        <NavLink to="/" className="logo-link" onClick={closeMobileMenu}>
          <img src="/icons/logo.svg" alt="Logo" className="header-logo" />
        </NavLink>
        {/* Контакты */}
        <div className="header-contacts">
          <a href="tel:+74996539305" className="contact-link">
            +7 (499) 653-93-05
          </a>
          <br />
          <a href="mailto:abatenkoff@mail.ru" className="contact-link">
            abatenkoff@mail.ru
          </a>
        </div>
        {/* Бургер-меню */}
        <div
          className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Навигация — десктоп */}
        <nav className="header-nav header-nav-desktop">
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
            <div className="nav-link dropdown-toggle">Коллекции</div>
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
        {/* Кнопки — десктоп */}
        <div className="header-buttons header-buttons-desktop">
          <div className="callback-button">
            <button onClick={openModal} className="callback-button-link">
              Заказать звонок
            </button>
          </div>
          <div className="login-button">
            <button onClick={openAuthModal} className="login-button-link">
              Войти
            </button>
          </div>
        </div>
      </div>

      {/* Side-drawer меню для мобилы */}
      <div className={`mobile-menu-drawer${mobileMenuOpen ? " open" : ""}`}>
        <div className="mobile-menu-header">
          <button className="mobile-menu-close" onClick={closeMobileMenu}>
            &#10005;
          </button>
        </div>
        <nav className="header-nav-mobile">
          <NavLink to="/full-hd-liza" className="nav-link" onClick={closeMobileMenu}>
            Дизайн
          </NavLink>
          <div className="dropdown-container">
            <button
              className={`nav-link dropdown-toggle${openDropdown === "remont" ? " open" : ""}`}
              onClick={() => toggleDropdown("remont")}
              type="button"
            >
              Ремонт
            </button>
            <div
              className="dropdown-menu"
              style={{ display: openDropdown === "remont" ? "flex" : "none" }}
            >
              <NavLink to="/ремонт-квартиры-под-ключ" className="dropdown-item" onClick={closeMobileMenu}>
                Ремонт квартиры под ключ
              </NavLink>
              <NavLink to="/ремонт-домов-под-ключ" className="dropdown-item" onClick={closeMobileMenu}>
                Ремонт домов под ключ
              </NavLink>
            </div>
          </div>
          <NavLink to="/комплектация" className="nav-link" onClick={closeMobileMenu}>
            Комплектация
          </NavLink>
          <div className="dropdown-container">
            <button
              className={`nav-link dropdown-toggle${openDropdown === "kollekcii" ? " open" : ""}`}
              onClick={() => toggleDropdown("kollekcii")}
              type="button"
            >
              Коллекции
            </button>
            <div
              className="dropdown-menu"
              style={{ display: openDropdown === "kollekcii" ? "flex" : "none" }}
            >
              <NavLink to="/портфолио" className="dropdown-item" onClick={closeMobileMenu}>
                Портфолио
              </NavLink>
              <NavLink to="/video-blog" className="dropdown-item" onClick={closeMobileMenu}>
                Видеоблог
              </NavLink>
              <NavLink to="/новости" className="dropdown-item" onClick={closeMobileMenu}>
                Новости
              </NavLink>
            </div>
          </div>
          <NavLink to="/сотрудничество" className="nav-link" onClick={closeMobileMenu}>
            Сотрудничество
          </NavLink>
          <div className="header-buttons header-buttons-mobile">
            <div className="callback-button">
              <button
                onClick={() => {
                  openModal();
                  closeMobileMenu();
                }}
                className="callback-button-link"
              >
                Заказать звонок
              </button>
            </div>
            <div className="login-button">
              <button
                onClick={() => {
                  openAuthModal();
                  closeMobileMenu();
                }}
                className="login-button-link"
              >
                Войти
              </button>
            </div>
          </div>
        </nav>
      </div>

      <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};
Header.defaultProps = {
  className: "",
};
