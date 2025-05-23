import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/pages/UserProfile.css";
import { Header, Footer } from "../components/layout";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("estimates");

  return (
    <div className="user-profile">
        <Header />
      <div className="container profile-container">
        {/* Верхняя секция с именем пользователя */}
        <div className="profile-header">
          <h1 className="profile-name">ФИО</h1>
        </div>

        {/* Основное содержимое профиля */}
        <div className="profile-content">
          {/* Табы */}
          <div className="profile-tabs">
            <div 
              className={`profile-tab ${activeTab === "estimates" ? "active" : ""}`}
              onClick={() => setActiveTab("estimates")}
            >
              СМЕТЫ
            </div>
            <div 
              className={`profile-tab ${activeTab === "reports" ? "active" : ""}`}
              onClick={() => setActiveTab("reports")}
            >
              ОТЧЕТНОСТЬ
            </div>
          </div>

          {/* Содержимое табов */}
          <div className="tab-content">
            {activeTab === "estimates" && (
              <div className="estimates-tab">
                {/* Здесь будет содержимое вкладки "Сметы" */}
                <div className="empty-state">
                  <p>Здесь будут отображаться ваши сметы</p>
                </div>
              </div>
            )}

            {activeTab === "reports" && (
              <div className="reports-tab">
                {/* Здесь будет содержимое вкладки "Отчетность" */}
                <div className="empty-state">
                  <p>Здесь будут отображаться ваши отчеты</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Нижний колонтитул пользовательского профиля */}
        <div className="profile-footer">
          <div className="profile-footer-left">
            <NavLink to="/" className="logo-link">
              <img src="/icons/logo.svg" alt="Logo" className="footer-logo" />
            </NavLink>
          </div>
          <div className="profile-footer-right">
            <a href="tel:+78005555535" className="contact-number">+7-800-555-55-35</a>
            <div className="social-links">
              <a href="#" className="social-link">
                <img src="/icons/telegram.svg" alt="Telegram" className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <img src="/icons/vk.svg" alt="VK" className="social-icon" />
              </a>
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;