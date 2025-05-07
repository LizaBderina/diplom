// src/components/common/ConsultationForm.jsx
import React, { useState } from "react";
import PropTypes           from "prop-types";
import "./styles.css";

export const ConsultationForm = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name:     "",
    phone:    "",
    area:     "",
    privacy:  false,
    personal: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Форма отправлена!");
  };

  return (
    <section className={`consultation-form ${className}`}>
      <div className="form-container">
        <h3 className="form-title">КОНСУЛЬТАЦИЯ С ДИЗАЙНЕРОМ</h3>
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

          <label className="form-checkbox">
            <input
              type="checkbox"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              required
            />
            <span>
              Согласен с&nbsp;условиями{" "}
              <span className="underline">политики конфиденциальности данных</span>
            </span>
          </label>

          <label className="form-checkbox">
            <input
              type="checkbox"
              name="personal"
              checked={formData.personal}
              onChange={handleChange}
              required
            />
            <span>Даю согласие на&nbsp;обработку персональных данных</span>
          </label>

          <button type="submit" className="submit-button">
            Записаться на консультацию
          </button>
        </form>
      </div>
    </section>
  );
};

ConsultationForm.propTypes = {
  className: PropTypes.string,
};
