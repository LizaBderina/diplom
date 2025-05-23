import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./AuthModal.css";

const AuthModal = ({ isOpen, onClose, initialView = "login" }) => {
  const [view, setView] = useState(initialView);
  const [showPassword, setShowPassword] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Обработчик для поля телефона
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Удаляем все символы кроме цифр
    const digitsOnly = value.replace(/\D/g, "");
    
    // Форматируем номер телефона
    let formattedPhone = "";
    if (digitsOnly.length > 0) {
      formattedPhone = "+";
      
      if (digitsOnly.length > 0) {
        formattedPhone += digitsOnly.substring(0, 1);
      }
      
      if (digitsOnly.length > 1) {
        formattedPhone += " (" + digitsOnly.substring(1, 4);
      }
      
      if (digitsOnly.length > 4) {
        formattedPhone += ") " + digitsOnly.substring(4, 7);
      }
      
      if (digitsOnly.length > 7) {
        formattedPhone += "-" + digitsOnly.substring(7, 9);
      }
      
      if (digitsOnly.length > 9) {
        formattedPhone += "-" + digitsOnly.substring(9, 11);
      }
    }
    
    setPhoneValue(formattedPhone);
    
    // Валидация номера телефона
    if (digitsOnly.length > 0 && digitsOnly.length < 11) {
      setPhoneError("Введите полный номер телефона");
    } else {
      setPhoneError("");
    }
  };

  // Переключение между формами входа и регистрации
  const toggleView = () => {
    setView(view === "login" ? "signup" : "login");
    // Сбросим состояние телефона при переключении между формами
    setPhoneValue("");
    setPhoneError("");
  };

  // Закрываем модальное окно при нажатии Escape
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  // Если модальное окно не открыто, не рендерим его
  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        {/* Форма входа */}
        {view === "login" && (
          <div className="auth-form login-form">
            <button className="close-button" onClick={onClose}>
              Закрыть
            </button>
            <h2 className="auth-title">Здравствуйте!</h2>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Электронная почта / телефон"
                  className="auth-input"
                />
              </div>
              <div className="form-group password-group">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Пароль"
                  className="auth-input"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <img src="/icons/eye-off.svg" alt="Скрыть пароль" />
                  ) : (
                    <img src="/icons/eye.svg" alt="Показать пароль" />
                  )}
                </button>
              </div>
              <button type="submit" className="auth-button">
                Войти в аккаунт
              </button>
            </form>
            <p className="auth-toggle-link" onClick={toggleView}>
              Или создайте аккаунт тут
            </p>
          </div>
        )}

        {/* Форма регистрации */}
        {view === "signup" && (
          <div className="auth-form signup-form">
            <button className="close-button" onClick={onClose}>
              Закрыть
            </button>
            <h2 className="auth-title">Регистрация</h2>
            <form>
              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Телефон"
                  className={`auth-input ${phoneError ? 'error' : ''}`}
                  value={phoneValue}
                  onChange={handlePhoneChange}
                />
                {phoneError && <div className="input-error">{phoneError}</div>}
                <div className="input-hint">Формат: +7 (XXX) XXX-XX-XX</div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Электронная почта"
                  className="auth-input"
                />
              </div>
              <div className="form-group password-group">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Пароль"
                  className="auth-input"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <img src="/icons/eye-off.svg" alt="Скрыть пароль" />
                  ) : (
                    <img src="/icons/eye.svg" alt="Показать пароль" />
                  )}
                </button>
              </div>
              <button type="submit" className="auth-button">
                Создать аккаунт
              </button>
            </form>
            <p className="auth-toggle-link" onClick={toggleView}>
              Уже есть аккаунт
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;

