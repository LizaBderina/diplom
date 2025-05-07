// src/pages/EquipmentPage.jsx
import React from "react";
import { Link }          from "react-router-dom";
import { Header, Footer } from "../components/layout";
import "../styles/pages/equipmentpage.css";

const hero = "img/image_45.png";

/* примеры готовых работ (4 шт) */
const examples = [       
  "/img/balda1.jpg",
  "/img/balaba2.jpg",
  "/img/baldada3.jpg",
  "/img/balana4.jpg",
];

/* направления иконка+подпись (12 шт)  */
const directions = [
  { src: "/img/san.jpg",          label: "Сантехника" },
  { src: "/img/col.webp",            label: "Керамогранит и плитка" },
  { src: "/img/par.jpeg",           label: "Напольные покрытия" },
  { src: "/img/div.jpeg",             label: "Мягкая мебель" },
  { src: "/img/sis.jpeg",             label: "Системы вентиляции и кондиционирования" },
  { src: "/img/sve.webp",            label: "Технический и декоративный свет" },
  { src: "/img/kyx.jpeg",          label: "Текстильное оформление, декор" },
  { src: "/img/ess.jpeg",            label: "Обои, краска, лепнина…" },
  { src: "/img/bit.jpg",       label: "Бытовая техника" },
  { src: "/img/kyx.jpeg",          label: "Кухни, шкафы, гардеробные" },
  { src: "/img/cole.webp",            label: "Двери и перегородки" },
  { src: "/img/dik.jpeg",          label: "Розетки и выключатели" },
];

const EquipmentPage = () => (
  <div className="equipment-page">
    <Header />

    <main className="container">

      {/* ── Заголовок + hero ───────────────────────── */}
      <section className="section">
        <h1 className="equipment-title">
          Сервис комплектации<br />чистовыми материалами
        </h1>

        <div className="main-image">
          <img src={hero} alt="Интерьер кухни" />
        </div>
      </section>

      {/* ── Примеры работ ─────────────────────────── */}
      <section className="section">
        <h2 className="examples-title">Посмотрите примеры наших работ</h2>

        <div className="examples-grid">
          {examples.map((src, i) => (
            <img className="example-card" src={src} alt={`Пример ${i+1}`} key={src} />
          ))}
        </div>

        <Link to="/портфолио" className="show-more-button">
          Показать ещё
        </Link>
      </section>

      {/* ── Направления ───────────────────────────── */}
      <section className="section">
        <h2 className="directions-title">Работаем с направлениями:</h2>

        <div className="directions-grid">
          {directions.map(({ src, label }) => (
            <figure className="direction-card" key={label}>
              <img className="direction-icon" src={src} alt={label} />
              <figcaption className="direction-name">{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default EquipmentPage;
