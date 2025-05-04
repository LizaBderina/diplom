// src/pages/RenovationPage.jsx
import React, { useState } from "react";
import { Header, Footer } from "../components/layout";
import "../styles/pages/renovationpage.css";

const RenovationPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;
  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  return (
    <div className="renovation-page">
      <Header />
      
      <div className="container">
        <div className="renovation-cards">
          <div className="renovation-card">
            <h2 className="card-title">Ремонт квартир</h2>
            <p className="card-text">Ремонт квартир от 200кв.м. Дизайн-проект в подарок</p>
            <p className="card-location">Москва и московская область</p>
            <button className="price-button">Узнать стоимость ремонта</button>
          </div>
          
          <div className="renovation-card">
            <h2 className="card-title">Ремонт домов</h2>
            <p className="card-text">Ремонт квартир от 300кв.м. Дизайн-проект в подарок</p>
            <p className="card-location">Москва и московская область</p>
            <button className="price-button">Узнать стоимость ремонта</button>
          </div>
        </div>
        
        <h2 className="calc-title">Рассчитайте стоимость ремонта вашего объекта «под ключ»</h2>
        
        <div className="calculator-form">
          <div className="calculator-header">
            <p className="calculator-description">
              ОТВЕТЬТЕ НА 7 ВОПРОСОВ, ЧТОБЫ РАССЧИТАТЬ СТОИМОСТЬ
            </p>
            <p className="calculator-bonus">
              Предварительное планировочное решение будущего интерьера - в ПОДАРОК!
            </p>
            <div className="calculator-progress">{currentStep}/{totalSteps}</div>
          </div>
          
          <div className="calculator-step">
            <h3 className="step-title">Дизайн какого объекта вас интересует?</h3>
            
            <div className="options-grid">
              <div className="option-card">
                <div className="option-image"></div>
                <div className="option-label">Квартира</div>
              </div>
              
              <div className="option-card">
                <div className="option-image"></div>
                <div className="option-label">Дом</div>
              </div>
              
              <div className="option-card">
                <div className="option-image"></div>
                <div className="option-label">Нежилое/комерция</div>
              </div>
            </div>
            
            <div className="form-buttons">
              <button className="back-button" onClick={prevStep} disabled={currentStep === 1}>Назад</button>
              <button className="next-button" onClick={nextStep}>Далее</button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RenovationPage;