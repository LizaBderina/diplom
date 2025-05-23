import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import '../../styles/components/promo-banner.css';
import YandexMapReact from './YandexMapReact';
import MapboxMap from '../MapboxMap';
import PlotsMap from '../PlotsMap';
const PromoBanner = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <section className="promo-banner">
      <div className="container">
        <AnimatePresence mode="wait">
          {showMap ? (
            <motion.div
              key="map"
              className="promo-inner map-mode"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="map-wrapper">
                <PlotsMap 
                  coords={[55.830, 37.137]} // Широта, долгота (например, центр bounds)
                  zoom={16}                 // Подбери зум по масштабу участка
                  // styleUrl="mapbox://styles/igorsergeevichisit/cmaqlgb1001oo01s39jnf3z7b"
                />

              </div>
              <button
                className="promo-button back-btn"
                onClick={() => setShowMap(false)}
              >
                ← К баннеру
              </button>
            </motion.div>
          ) : (
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
                  Создайте своё идеальное пространство <br />
                  с нашими экспертами!
                </h2>
                <button
                  className="promo-button"
                  onClick={() => setShowMap(true)}
                >
                  Покупай участок в коттеджном посёлке бизнес-класса «ПАДОВЫ ОЗЁРА»
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
