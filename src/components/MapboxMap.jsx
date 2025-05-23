import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


// 📌 Подставь свой токен или используй через .env
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

mapboxgl.accessToken = MAPBOX_TOKEN;


const MapboxMap = () => {
  const mapRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      console.error('[Mapbox] Container not found');
      return;
    }

    if (!MAPBOX_TOKEN) {
      console.error('[Mapbox] Token is missing');
      return;
    }

    console.log('[Mapbox] Creating map...');
    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: 'mapbox://styles/igorsergeevichisit/cmazbgnxy00bh01r29ac6dery',
      center: [37.136125, 55.829536],
      zoom: 16,
    });

    mapRef.current = map;

    map.on('load', () => {
      console.log('[Mapbox] Map loaded successfully');
      map.resize();
    });

    map.on('error', (e) => {
      console.error('[Mapbox error]', e?.error || e);
    });

    return () => {
      console.log('[Mapbox] Cleaning up');
      map.remove();
    };
  }, []);

  return (
    <div>

      <div
        ref={containerRef}
        style={{ width: '100%', height: '500px', border: '2px dashed #999' }}
      />
    </div>
  );
};

export default MapboxMap;
