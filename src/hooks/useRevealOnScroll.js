// src/components/sections/ExperienceSection.jsx
import React from "react";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import "../../styles/pages/homepage.css";
import "../../styles/components/experience-section.css";

const ExperienceSection = () => {
  const revealRef = useRevealOnScroll();

  return (
    <section ref={revealRef} className="experience-section reveal">
      <div className="container">
        <h2 className="section-title">
          ПРОЕКТИРУЕМ ЧАСТНЫЕ И<br />КОММЕРЧЕСКИЕ ИНТЕРЬЕРЫ БОЛЕЕ 25 ЛЕТ
        </h2>

        <div className="stats-container">
          {/* Первый большой блок - 25 лет */}
          {/* ...оставшийся JSX без изменений... */}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
