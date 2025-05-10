import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { sendCallbackRequest } from "../../services/telegramService";
import "./CallbackModal.css";

const CallbackModal = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [isDataProcessingChecked, setIsDataProcessingChecked] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Управление блокировкой прокрутки страницы
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Блокируем прокрутку
      resetForm(); // Сбрасываем форму при открытии
    } else {
      document.body.style.overflow = ""; // Восстанавливаем прокрутку
    }
    
    // Очистка при размонтировании
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Сброс формы
  const resetForm = () => {
    setPhoneNumber("");
    setIsPrivacyChecked(false);
    setIsDataProcessingChecked(false);
    setFormError("");
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    
    // Удаляем все нецифровые символы для подсчета длины
    const digitsOnly = value.replace(/\D/g, '');
    
    // Ограничиваем количество цифр до 10 (для российского номера без кода страны)
    if (digitsOnly.length <= 10) {
      // Разрешаем только цифры, скобки, дефис и пробелы
      const regex = /^[0-9() \-]*$/;
      
      if (regex.test(value) || value === "") {
        setPhoneNumber(value);
      }
    }
  };

  // Функция для проверки заполненности номера телефона
  const isPhoneValid = () => {
    // Получаем только цифры из номера
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    // Проверяем, что длина номера равна 10 цифрам
    return digitsOnly.length === 10;
  };

  // Форматирование номера для отправки
  const formatPhoneForSending = () => {
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    return `+7${digitsOnly}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(""); // Сбрасываем ошибку при каждой попытке отправки
    
    // Проверка валидности номера телефона
    if (!isPhoneValid()) {
      setFormError("Пожалуйста, введите корректный номер телефона (10 цифр)");
      return;
    }
    
    // Проверка принятия условий
    if (!isPrivacyChecked || !isDataProcessingChecked) {
      setFormError("Необходимо согласиться с условиями обработки персональных данных");
      return;
    }
    
    try {
      setIsSubmitting(true); // Устанавливаем состояние загрузки
      
      // Отправляем запрос в Telegram
      await sendCallbackRequest(formatPhoneForSending());
      
      // Если успешно - показываем уведомление и закрываем модальное окно
      alert("Запрос на звонок успешно отправлен! Ожидайте звонка в ближайшее время.");
      
      // Сбрасываем форму и закрываем окно
      resetForm();
      onClose();
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
      setFormError("Произошла ошибка при отправке запроса. Пожалуйста, попробуйте позже.");
    } finally {
      setIsSubmitting(false); // Сбрасываем состояние загрузки
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Заказать звонок</h2>
        <p className="modal-subtitle">
          Заполните данные для связи, и дизайнер перезвонит Вам в течение получаса
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Ваш телефон</label>
            <div className="phone-input-container">
              <div className="country-code">
                <span>+7</span>
              </div>
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={handlePhoneChange}
                className="phone-input"
                placeholder="(999) 999-99-99"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="phone-hint">
              Введите 10 цифр номера (без кода страны)
            </div>
          </div>
          
          <div className="form-group">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={isPrivacyChecked}
                onChange={() => setIsPrivacyChecked(!isPrivacyChecked)}
                disabled={isSubmitting}
              />
              <span className="checkbox-text">
                Согласен с условиями <NavLink to="/политика-конфиденциальности" target="_blank" rel="noopener noreferrer" className="privacy-link">политики конфиденциальности данных</NavLink>
              </span>
            </label>
          </div>
          
          <div className="form-group">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={isDataProcessingChecked}
                onChange={() => setIsDataProcessingChecked(!isDataProcessingChecked)}
                disabled={isSubmitting}
              />
              <span className="checkbox-text">
                Даю согласие на обработку своих персональных данных
              </span>
            </label>
          </div>
          
          {formError && <div className="form-error">{formError}</div>}
          
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? "Отправка..." : "Заказать звонок"}
          </button>
        </form>
      </div>
    </div>
  );
};

CallbackModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default CallbackModal;