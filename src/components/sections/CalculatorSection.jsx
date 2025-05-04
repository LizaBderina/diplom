// src/components/sections/CalculatorSection.jsx
import React, { useState } from "react";
import "../../styles/components/calculator-section.css";

const CalculatorSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

  const options = [
    { id: 1, label: "Квартира", icon: "🏠" },
    { id: 2, label: "Дом", icon: "🏡" },
    { id: 3, label: "Коммерческое", icon: "🏢" }
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div id="interior-designer-questionnaire"
    className="calculator-section">
      <div className="calculator-header">
        <h3 className="calculator-title">Ответьте на 7 вопросов, чтобы рассчитать стоимость</h3>
        <div className="calculator-progress">
          <span className="current-step">{currentStep}</span>/<span className="total-steps">{totalSteps}</span>
        </div>
      </div>
      
      <div className="calculator-body">
        <h4 className="calculator-question">Дизайн какого объекта вас интересует?</h4>
        <div className="calculator-options">
          {options.map(option => (
            <div key={option.id} className="calculator-option">
              <button className="option-button">
                <div className="option-image">{option.icon}</div>
                <div className="option-label">{option.label}</div>
              </button>
            </div>
          ))}
        </div>
        <div className="calculator-controls">
          <button 
            className="control-button prev-button" 
            disabled={currentStep === 1}
            onClick={handlePrev}
          >
            Назад
          </button>
          <button 
            className="control-button next-button"
            onClick={handleNext}
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorSection;