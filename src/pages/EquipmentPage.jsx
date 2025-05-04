// src/pages/EquipmentPage.jsx
import React from "react";
import { Header, Footer } from "../components/layout";
import "../styles/pages/equipmentpage.css";

const EquipmentPage = () => {
  return (
    <div className="equipment-page">
      <Header />
      
      <div className="container">
        <h1 className="equipment-title">СЕРВИС КОМПЛЕКТАЦИИ<br />ЧИСТОВЫМИ МАТЕРИАЛАМИ</h1>
        
        <div className="main-image">
          <img src="/img/kitchen-interior.jpg" alt="Интерьер кухни" />
        </div>
        
        <h2 className="examples-title">ПОСМОТРИТЕ ПРИМЕРЫ НАШИХ РАБОТ</h2>
        
        <div className="examples-grid">
          <div className="example-card"></div>
          <div className="example-card"></div>
          <div className="example-card"></div>
          <div className="example-card"></div>
        </div>
        
        <button className="show-more-button">Показать ещё</button>
        
        <h2 className="directions-title">РАБОТАЕМ С НАПРАВЛЕНИЯМИ:</h2>
        
        <div className="directions-grid">
          <div className="direction-card">
            <div className="direction-icon"></div>
            <div className="direction-name">Сантехника</div>
          </div>
          
          <div className="direction-card">
            <div className="direction-icon"></div>
            <div className="direction-name">Керамогранит и плитка</div>
          </div>
          
          <div className="direction-card">
            <div className="direction-icon"></div>
            <div className="direction-name">Напольные покрытия</div>
          </div>
          
          <div className="direction-card">
            <div className="direction-icon"></div>
            <div className="direction-name">Мягкая мебель</div>
          </div>
          
          <div className="direction-card">
            <div className="direction-icon"></div>
            <div className="direction-name">Системы вентиляции и кондиционирования</div>
          </div>
          
          <div className="direction-card">
            <div className="direction-icon"></div>
            <div className="direction-name">Технический и декоративный свет</div>
          </div>
          
          <div className="direction-card">
            <div className="direction-icon"></div>
            <div className="direction-name">Текстильное оформление, декор</div>
          </div>
          
          <div className="direction-card">
            <div className="direction-icon"></div>
            <div className="direction-name">Обои, краска, лепнина, декоративная штукатурка</div>
          </div>
          
          <div className="direction-card">
            <div className="direction-icon"></div>
            <div className="direction-name">Бытовая техника</div>
          </div>
          
          <div className="direction-card">
            <div className="direction-icon"></div>
            <div className="direction-name">Кухни, шкафы, гардеробные</div>
          </div>
          
          <div className="direction-card">
            <div className="direction-icon"></div>
            <div className="direction-name">Двери и перегородки</div>
          </div>
          
          <div className="direction-card">
            <div className="direction-icon"></div>
            <div className="direction-name">Розетки и выключатели</div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EquipmentPage;