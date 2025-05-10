// src/components/common/ConsultationForm.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { sendConsultationRequest } from "../../services/telegramService"; // Импортируем сервис
import "./styles.css";

export const ConsultationForm = ({ 
  className = "", 
  title = "КОНСУЛЬТАЦИЯ С ДИЗАЙНЕРОМ", 
  subtitle = "Заполните форму и мы свяжемся с вами в ближайшее время!",
  buttonText = "Записаться на консультацию",
  withNote = false,
  noteText = "* для помещений более 200 кв. м.",
  formType = "Консультация" // Тип формы для передачи в Telegram
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    privacy: false,
    personal: false,
  });
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Обработка обычных полей формы
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === "checkbox" ? checked : value 
    }));
  };

  // Специальная обработка для поля телефона
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    
    // Удаляем все нецифровые символы для подсчета длины
    const digitsOnly = value.replace(/\D/g, '');
    
    // Ограничиваем количество цифр до 10 (для российского номера без кода страны)
    if (digitsOnly.length <= 10) {
      // Разрешаем только цифры, скобки, дефис и пробелы
      const regex = /^[0-9() \-]*$/;
      
      if (regex.test(value) || value === "") {
        setFormData(prev => ({
          ...prev,
          phone: value
        }));
      }
    }
  };

  // Валидация формы перед отправкой
  const validateForm = () => {
    // Проверяем обязательные поля
    if (!formData.name.trim()) {
      setFormError("Пожалуйста, введите ваше имя");
      return false;
    }

    // Проверка номера телефона (должно быть 10 цифр)
    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (digitsOnly.length !== 10) {
      setFormError("Пожалуйста, введите корректный номер телефона (10 цифр)");
      return false;
    }

    // Проверка площади (должно быть указано значение)
    if (!formData.area.trim()) {
      setFormError("Пожалуйста, укажите площадь помещения");
      return false;
    }

    // Проверка согласия с условиями
    if (!formData.privacy || !formData.personal) {
      setFormError("Необходимо согласиться с условиями обработки данных");
      return false;
    }

    // Если все проверки пройдены
    return true;
  };

  // Форматирование номера для отправки
  const formatPhoneForSending = () => {
    const digitsOnly = formData.phone.replace(/\D/g, '');
    return `+7${digitsOnly}`;
  };

  // Обработка отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setIsSuccess(false);

    // Проверка валидности формы
    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);

      // Подготовка данных для отправки
      const dataToSend = {
        name: formData.name,
        phone: formatPhoneForSending(),
        area: formData.area
      };

      // Отправка данных через Telegram сервис
      await sendConsultationRequest(dataToSend, formType);

      // Успешная отправка
      setIsSuccess(true);
      
      // Сброс формы после успешной отправки
      setFormData({
        name: "",
        phone: "",
        area: "",
        privacy: false,
        personal: false,
      });
      
      // Скрыть уведомление об успехе через 5 секунд
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      setFormError("Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`consultation-form ${className}`}>
      <div className="form-container">
        <h3 className="form-title">{title}</h3>
        <p className="form-subtitle">{subtitle}</p>

        {isSuccess && (
          <div className="form-success">
            Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <div className="phone-input-container">
              <div className="country-code">
                <span>RU</span>
                <span>+7</span>
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="(999) 999-99-99"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                disabled={isSubmitting}
                className="form-input phone-input"
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="area"
              placeholder="Площадь вашего объекта"
              value={formData.area}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="form-input"
            />
          </div>

          <div className="form-checkbox">
            <input
              type="checkbox"
              id={`privacy-${title.replace(/\s+/g, '-').toLowerCase()}`} // Уникальный id для предотвращения дублирования
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <label htmlFor={`privacy-${title.replace(/\s+/g, '-').toLowerCase()}`}>
              Согласен с условиями <NavLink to="/политика-конфиденциальности" className="privacy-link">политики конфиденциальности данных</NavLink>
            </label>
          </div>

          <div className="form-checkbox">
            <input
              type="checkbox"
              id={`personal-${title.replace(/\s+/g, '-').toLowerCase()}`} // Уникальный id для предотвращения дублирования
              name="personal"
              checked={formData.personal}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <label htmlFor={`personal-${title.replace(/\s+/g, '-').toLowerCase()}`}>
              Даю согласие на обработку своих персональных данных
            </label>
          </div>

          {formError && <div className="form-error">{formError}</div>}

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Отправка..." : buttonText}
          </button>
          
          {withNote && <p className="form-note">{noteText}</p>}
        </form>
      </div>
    </div>
  );
};

ConsultationForm.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  withNote: PropTypes.bool,
  noteText: PropTypes.string,
  formType: PropTypes.string // Тип формы для передачи в Telegram
};

export default ConsultationForm;