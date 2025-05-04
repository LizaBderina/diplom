import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import '../../styles/components/promo-banner.css';
import YandexMapReact from './YandexMapReact';   

const PromoBanner = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <section className="promo-banner">
      <div className="container">
        <AnimatePresence mode="wait">
          {showMap ? (
            /* ---------- КАРТА ---------- */
            <motion.div
              key="map"
              className="promo-inner map-mode"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <YandexMapReact coords={[55.7558, 37.6176]} zoom={13} />

              {/* вернуться к баннеру */}
              <button
                className="promo-button back-btn"
                onClick={() => setShowMap(false)}
              >
                ← К баннеру
              </button>
            </motion.div>
          ) : (
            /* ---------- БАННЕР ---------- */
            <motion.div
              key="banner"
              className="promo-inner"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="promo-content">
                <h2 className="promo-title">
                  Создайте своё идеальное пространство
                  <br />с нашими экспертами!
                </h2>

                <button
                  className="promo-button"
                  onClick={() => setShowMap(true)}
                >
                  Покупай участок в коттеджном посёлке
                  бизнес-класса «ПАДОВЫ ОЗЁРА»
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PromoBanner;