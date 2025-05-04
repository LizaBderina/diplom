import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/portfolio-section.css";

const cards = [
  { id: 1, title: "Дизайн гостиной",        desc: "Современный минимализм", image: "/img/living.jpg",   size: "big"   },
  { id: 2, title: "Дизайн спальни",         desc: "Скандинавский стиль",    image: "/img/bedroom.jpg",  size: "small" },
  { id: 3, title: "Дизайн кухни",           desc: "Современная классика",   image: "/img/kitchen.jpg",  size: "small" },
  { id: 4, title: "Дизайн кабинета",        desc: "Неоклассика",            image: "/img/office.jpg",   size: "small" },
  { id: 5, title: "Дизайн ванной комнаты",  desc: "Лофт",                   image: "/img/bath.jpg",     size: "big"   },
  { id: 6, title: "Дизайн детской",         desc: "Современный стиль",      image: "/img/kids.jpg",     size: "small" }
];

export default function PortfolioSection() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <h2 className="section-title">РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</h2>
        <p className="portfolio-hint">
          Хотите увидеть больше объектов? Перейдите в&nbsp;раздел&nbsp;«Портфолио»
        </p>

        <div className="portfolio-grid">
          {cards.map(card => (
            <div
              key={card.id}
              className={`item ${card.size}`}
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="overlay" />
              <div className="content">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Link to="/portfolio" className="portfolio-btn">Портфолио</Link>
      </div>
    </section>
  );
}
