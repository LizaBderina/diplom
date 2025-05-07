// src/pages/PortfolioPage.jsx
// Финальная версия страницы «Портфолио» (2 × 5 карточек, отступ 20 px)
// ─────────────────────────────────────────────────────────────────────
import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../components/layout';
import '../styles/pages/portfoliopage.css';

// 10 карточек‑заглушек (замените на данные из API/CMS)
const projects = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Название ${i + 1}`,
  description: `Описание ${i + 1}`,
}));

const PortfolioPage = () => (
  <div className="portfolio-page">
    <Header />

    <main>
      {/* Hero */}
      <section className="portfolio-hero container">
        <p className="portfolio-intro">
          Всего сделано более <strong>1500</strong> проектов.
          <br />Здесь мы оставили самые, на наш взгляд, интересные.
        </p>
        <h1 className="portfolio-title">ПОРТФОЛИО</h1>
      </section>

      {/* Grid */}
      <section className="portfolio-grid container">
        {projects.map((p) => (
          <Link key={p.id} to={`/portfolio/${p.id}`} className="portfolio-item">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </Link>
        ))}
      </section>
    </main>

    <Footer />
  </div>
);

export default PortfolioPage;

