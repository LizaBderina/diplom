import React, { useState, useRef, useEffect } from 'react';
import Map, { Source, Layer, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import plotsData from './plots.geojson';
import houseIconUrl from '../assets/icons/home.svg'; // если PlotsMap.jsx лежит в src/components/


const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const polygonLayer = {
  id: 'plots-polygon',
  type: 'fill',
  paint: {
    'fill-color': [
      'match',
      ['get', 'status'],
      'reserved', '#f77f00',
      'sold', '#d62828',
      '#2a9d8f'
    ],
    'fill-opacity': 0.85,
    'fill-outline-color': '#111'
  }
};

const houseIconLayer = {
  id: 'plots-house-icon',
  type: 'symbol',
  layout: {
    'icon-image': 'my-house', // Имя, которое задашь при addImage
    'icon-size': 0.12,        // подбери под свой размер!
    'icon-allow-overlap': true
  }
};

export default function PlotsMap() {
  const [popup, setPopup] = useState(null);
  const mapRef = useRef();

  // Хак для добавления картинки после загрузки стиля
  useEffect(() => {
    if (!mapRef.current) return;
    const map = mapRef.current.getMap();

    // Проверка, не добавлена ли уже иконка
    if (map.hasImage('my-house')) return;

    // Грузим иконку как img и добавляем в mapbox
    const img = new window.Image(64, 64);
    img.onload = () => {
      map.addImage('my-house', img, { sdf: false });
    };
    img.src = houseIconUrl;
  }, [houseIconUrl]);

  return (
    <div style={{ width: '100%', height: 500 }}>
      <Map
        ref={mapRef}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude: 37.137,
          latitude: 55.83,
          zoom: 16
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
        interactiveLayerIds={['plots-polygon']}
        onClick={e => {
          const feature = e.features && e.features[0];
          if (feature) {
            setPopup({
              lngLat: e.lngLat,
              props: feature.properties
            });
          } else {
            setPopup(null);
          }
        }}
      >
        <Source id="plots" type="geojson" data={plotsData}>
          <Layer {...polygonLayer} />
          <Layer {...houseIconLayer} />
        </Source>
        {popup && (
          <Popup
            longitude={popup.lngLat.lng}
            latitude={popup.lngLat.lat}
            anchor="top"
            onClose={() => setPopup(null)}
            closeOnClick={false}
          >
            <div>
              <b>{popup.props.title}</b><br />
              Сотки: {popup.props.area}<br />
              Статус: <b>{popup.props.status}</b><br />
              Стоимость: <b>{popup.props.price}</b>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
