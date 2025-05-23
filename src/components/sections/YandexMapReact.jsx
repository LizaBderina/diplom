import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const statusColor = {
  sold: '#d62828',
  reserved: '#f77f00',
  free: '#2a9d8f',
};

export default function YandexMapReact({
  coords = [55.7558, 37.6176],
  zoom = 12,
  plots = [],
  onDraw,
  styleUrl = 'mapbox://styles/mapbox/streets-v11',
}) {
  const mapNode = useRef(null);
  const mapRef = useRef(null);

  // Рендер участков
  const renderPlots = (map) => {
    if (!map) return;
    const style = map.getStyle?.();
    if (!style || !style.layers) return;

    style.layers
      .filter((l) => l.id.startsWith('plot-'))
      .forEach((l) => {
        if (map.getLayer(l.id)) map.removeLayer(l.id);
        if (map.getSource(l.id)) map.removeSource(l.id);
      });

    plots.forEach((plot, i) => {
      const id = `plot-${i}`;
      const color = statusColor[plot.status] || statusColor.free;

      if (Array.isArray(plot.coords)) {
        new mapboxgl.Marker({ color })
          .setLngLat([...plot.coords].reverse())
          .setPopup(
            new mapboxgl.Popup({ offset: 20 }).setHTML(
              `<strong>${plot.title || 'Участок'}</strong><br/>
               Статус: <b>${
                 plot.status === 'sold'
                   ? 'Куплен'
                   : plot.status === 'reserved'
                   ? 'Забронирован'
                   : 'Свободен'
               }</b><br/>
               Площадь: ${plot.area ?? '-'} сот.`
            )
          )
          .addTo(map);
      } else if (Array.isArray(plot.polygon)) {
        map.addSource(id, {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Polygon',
              coordinates: [plot.polygon.map(([lat, lng]) => [lng, lat])],
            },
          },
        });

        map.addLayer({
          id,
          type: 'fill',
          source: id,
          paint: { 'fill-color': color, 'fill-opacity': 0.4 },
        });

        map.addLayer({
          id: `${id}-stroke`,
          type: 'line',
          source: id,
          paint: { 'line-color': color, 'line-width': 2 },
        });
      }
    });
  };

  // Инициализация карты
  useEffect(() => {
    if (mapRef.current || !mapNode.current) return;

    const map = new mapboxgl.Map({
      container: mapNode.current,
      center: coords,
      zoom,
      style: styleUrl,
    });

    mapRef.current = map;

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: { polygon: true, trash: true },
    });
    map.addControl(draw);

    map.on('load', () => {
      renderPlots(map);
      map.resize();
    });

    map.on('draw.create', (e) => {
      const poly = e.features[0];
      if (poly && onDraw) {
        const coordsLatLng = poly.geometry.coordinates[0].map(([lng, lat]) => [
          lat,
          lng,
        ]);
        onDraw(coordsLatLng);
      }
    });

    map.on('error', (e) => {
      console.error('[Mapbox error]', e?.error || e);
    });

    return () => map.remove();
  }, [coords, zoom, styleUrl]);

  // Перерисовать участки при изменении props
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (map.isStyleLoaded()) {
      renderPlots(map);
    } else {
      map.once('load', () => renderPlots(map));
    }
  }, [plots]);

  // Центровка карты при изменении координат
  useEffect(() => {
    const map = mapRef.current;
    if (map) {
      map.flyTo({ center: coords, zoom });
    }
  }, [coords, zoom]);

  // ResizeObserver: исправление ошибки "Cannot set properties of undefined"
  useEffect(() => {
    const map = mapRef.current;
    const wrapper = mapNode.current;

    if (!map || !wrapper) return;

    const resizeMapIfReady = () => {
      // Проверяем, что контейнер уже видим и карта есть
      if (map && map.getContainer()?.clientWidth > 0) {
        try {
          map.resize();
        } catch (e) {
          console.warn('[Mapbox] resize skipped', e.message);
        }
      }
    };

    const observer = new window.ResizeObserver(() => {
      resizeMapIfReady();
    });

    observer.observe(wrapper);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={mapNode}
      className="map-wrapper"
      style={{ width: '100%', height: 500 }}
    />
  );
}
