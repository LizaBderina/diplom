// src/components/common/ConsultationForm.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { BtZak } from "../ui/Button";
import "./styles.css";

export const ConsultationForm = ({ className }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    privacy: false,
    personal: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы
    console.log('Form submitted:', formData);
    alert('Форма отправлена!');
  };

  return (
    <div className={`consultation-form ${className || ""}`}>
      <div className="form-container">
        <div className="form-title">КОНСУЛЬТАЦИЯ С ДИЗАЙНЕРОМ</div>
        <p className="form-subtitle">
          Заполните форму и мы свяжемся с вами в ближайшее время!
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Ваше Имя" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input 
              type="tel" 
              name="phone" 
              placeholder="Телефон" 
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input 
              type="text" 
              name="area" 
              placeholder="Площадь вашего объекта" 
              value={formData.area}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-checkbox">
            <input 
              type="checkbox" 
              name="privacy" 
              id="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              required
            />
            <label htmlFor="privacy">
              Согласен с условиями <span className="underline">политики конфиденциальности данных</span>
            </label>
          </div>
          
          <div className="form-checkbox">
            <input 
              type="checkbox" 
              name="personal" 
              id="personal"
              checked={formData.personal}
              onChange={handleChange}
              required
            />
            <label htmlFor="personal">
              Даю согласие на обработку персональных данных
            </label>
          </div>
          
          <button type="submit" className="submit-button">
            Записаться на консультацию
          </button>
        </form>
      </div>
    </div>
  );
};

ConsultationForm.propTypes = {
  className: PropTypes.string
};