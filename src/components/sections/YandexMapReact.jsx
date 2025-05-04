import React from 'react';

const YANDEX_IFRAME_SRC = 
  "https://yandex.ru/maps/?" +
  "um=constructor%3Aecd5014989a70fc7ebb76b7cf9d23ec5db0648d291bc89b513cc5009914cb564" +
  "&source=constructorLink";

const YandexMapWidget = () => (
  <div className="map-wrapper">
    <iframe
      title="Yandex Map Widget"
      src={YANDEX_IFRAME_SRC}
      frameBorder="0"
      allowFullScreen
    />
  </div>
);

export default YandexMapWidget;
