// src/pages/BlogPage.jsx
import React           from "react";
import { Header, Footer }      from "../components/layout";
import { ConsultationForm }    from "../components/common";
import "../styles/pages/blogpage.css";

const BlogPage = () => (
  <div className="blog-page">
    <Header />

    <div className="container">
      {/* ─── ВСТУПЛЕНИЕ ─────────────────────────────── */}
      <section className="section">
        <div className="blog-quote">
          <p>
            На рынке очень много дизайнеров интерьера, говорящих о себе: «мы опытные».
            На деле же мало кто может показать свои объекты, выполненные «под ключ»,
            интервью с клиентами и отзывы.
          </p>
          <p>
            Посмотрите мой видеоблог, выводы сделайте сами.
          </p>
        </div>
      </section>

      {/* ─── СЕКЦИЯ 1 ― ВИДЕОБЛОГ ───────────────────── */}
      <section className="section">
        <h2 className="section-title">Видеоблог.</h2>
        <p  className="section-subtitle">
          Обзоры интерьеров. Интервью с заказчиками. Обзоры Европейских выставок.
        </p>

        <div className="video-grid">
          {[
            "KxNODVh38eQ",
            "QJn4F8Np2QY",
            "IqHz0qtIGkQ",
            "-a149_AH5Ns",
            "A_mU8m_8K3Y",
            "DqucFCq6sVo",
            "sTb7DLOjffw",
            "cb-WEF4QSTM",
          ].map((id) => (
            <div className="video-card" key={id}>
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title={id}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </section>

      {/* ─── БЛОК СОЦСЕТЕЙ ──────────────────────────── */}
      <section className="section">
        <h3 className="social-title">Подпишитесь на наши социальные сети</h3>
        <p  className="section-subtitle">
          Следите за нашими проектами в онлайн-режиме: истории с клиентами, готовые
          дизайн-проекты и объекты «под ключ», советы и разборы ошибок!
        </p>

        <div className="social-icons">
          <a href="#" className="social-icon instagram"  title="Instagram" />
          <a href="#" className="social-icon telegram"   title="Telegram"  />
          <a href="#" className="social-icon whatsapp"   title="WhatsApp"  />
          <a href="#" className="social-icon youtube"    title="YouTube"   />
          <a href="#" className="social-icon rutube"     title="RuTube"    />
          <a href="#" className="social-icon pinterest"  title="Pinterest" />
        </div>
      </section>

      {/* ─── СЕКЦИЯ 2 ― ОБЗОРЫ ВЫСТАВОК ─────────────── */}
      <section className="section">
        <h2 className="section-title">Мои обзоры европейских выставок.</h2>
        <p  className="section-subtitle">
          Как я ездил на iSaloni, и другие известные интерьерные выставки.
        </p>

        <div className="video-grid">
          {[
            "VYbmjZYELto",
            "TZ0iWeMEyLc",
            "mABanVdPXLE",
            "gPSc6zdoQgY",
            "uhy1d8ne5XM",
            "eOmXgIpKOu4",
          ].map((id) => (
            <div className="video-card" key={id}>
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title={id}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </section>

      <ConsultationForm />
    </div>

    <Footer />
  </div>
);

export default BlogPage;
