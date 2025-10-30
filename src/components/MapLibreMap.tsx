import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export interface RegionData {
  id: string;
  name: string;
  sentiment: string;
  sentimentValue: number;
  hexColor: string;
  coordinates: [number, number];
  insights: string;
  llmRanking: string;
  aiMentions: string;
  competitors: string[];
}

interface MapLibreMapProps {
  regions: RegionData[];
  onRegionClick?: (region: RegionData) => void;
  onRegionHover?: (region: RegionData | null) => void;
  selectedRegionId?: string | null;
  hoveredRegionId?: string | null;
}

export function MapLibreMap({
  regions,
  onRegionClick,
  onRegionHover,
  selectedRegionId,
  hoveredRegionId,
}: MapLibreMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  const MAPTILER_KEY = import.meta.env.VITE_MAPTILER_KEY || 'get_your_own_OpIi9ZULNHzrESv6T2vL';
  
  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize clean map - no labels, no borders, minimal design
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/dataviz/style.json?key=${MAPTILER_KEY}`,
      center: [20, 20],
      zoom: 2,
      attributionControl: false,
      maxZoom: 8,
      minZoom: 1.5,
      interactive: true,
    });

    // Clean up map style after load
    map.current.on('load', () => {
      if (!map.current) return;

      // Hide all labels
      const layers = map.current.getStyle().layers;
      layers.forEach((layer) => {
        if (layer.type === 'symbol' || layer.id.includes('label') || layer.id.includes('text')) {
          map.current!.setLayoutProperty(layer.id, 'visibility', 'none');
        }
        // Hide borders
        if (layer.type === 'line' && (layer.id.includes('boundary') || layer.id.includes('border') || layer.id.includes('admin'))) {
          map.current!.setLayoutProperty(layer.id, 'visibility', 'none');
        }
      });

      // Make map very subtle and minimal
      map.current.setPaintProperty('background', 'background-color', '#fafafa');
      
      if (map.current.getLayer('water')) {
        map.current.setPaintProperty('water', 'fill-color', '#f0f0f0');
      }

      if (map.current.getLayer('landcover')) {
        map.current.setPaintProperty('landcover', 'fill-color', '#fafafa');
      }

      // Create GeoJSON source for interactive regions
      const geoJsonData: GeoJSON.FeatureCollection = {
        type: 'FeatureCollection',
        features: regions.map((region) => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: region.coordinates,
          },
          properties: {
            id: region.id,
            name: region.name,
            sentiment: region.sentiment,
            sentimentValue: region.sentimentValue,
            hexColor: region.hexColor,
          },
        })),
      };

      // Add source for potential future use (heatmap, circles, etc.)
      map.current.addSource('regions', {
        type: 'geojson',
        data: geoJsonData,
      });

      // Add big visible dots on the map
      map.current.addLayer({
        id: 'region-dots',
        type: 'circle',
        source: 'regions',
        paint: {
          'circle-radius': [
            'interpolate',
            ['linear'],
            ['get', 'sentimentValue'],
            3, 16,
            15, 24,
          ],
          'circle-color': ['get', 'hexColor'],
          'circle-opacity': 0.8,
          'circle-stroke-width': 3,
          'circle-stroke-color': '#ffffff',
        },
      });
    });

    // Add navigation controls
    map.current.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      'top-right'
    );

    // Handle map clicks for region selection
    map.current.on('click', (e) => {
      if (!map.current) return;
      
      // Find closest region to click point
      const features = map.current.queryRenderedFeatures(e.point, {
        layers: ['region-dots'],
      });

      if (features.length > 0 && onRegionClick) {
        const regionId = features[0].properties?.id;
        const region = regions.find(r => r.id === regionId);
        if (region) {
          onRegionClick(region);
        }
      }
    });

    // Handle mouse move for hover effects
    map.current.on('mousemove', (e) => {
      if (!map.current) return;
      
      const features = map.current.queryRenderedFeatures(e.point, {
        layers: ['region-dots'],
      });

      if (features.length > 0 && onRegionHover) {
        const regionId = features[0].properties?.id;
        const region = regions.find(r => r.id === regionId);
        if (region) {
          onRegionHover(region);
          map.current.getCanvas().style.cursor = 'pointer';
        } else {
          onRegionHover(null);
          map.current.getCanvas().style.cursor = '';
        }
      } else {
        if (onRegionHover) onRegionHover(null);
        if (map.current) map.current.getCanvas().style.cursor = '';
      }
    });

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []); // Only run once on mount

  // Handle region selection - zoom/pan to region
  useEffect(() => {
    if (!map.current || !selectedRegionId) return;

    const region = regions.find(r => r.id === selectedRegionId);
    if (!region) return;

    const performZoom = () => {
      if (!map.current) return;
      
      // Use a consistent zoom level that's visible enough
      const targetZoom = 4.5;
      
      map.current.flyTo({
        center: region.coordinates,
        zoom: targetZoom,
        duration: 1000,
        essential: true,
      });
    };

    // Wait for map to be ready
    if (map.current.loaded() && map.current.getSource('regions')) {
      // Small delay to ensure everything is ready
      setTimeout(performZoom, 100);
    } else {
      // Wait for load event
      const loadHandler = () => {
        if (map.current) {
          setTimeout(performZoom, 100);
        }
      };
      map.current.once('load', loadHandler);
      
      // Also check if it's already loaded but source isn't ready
      if (map.current.loaded()) {
        map.current.once('sourcedata', loadHandler);
      }
    }
  }, [selectedRegionId, regions]);

  // Update dot appearance based on hover/selection
  useEffect(() => {
    if (!map.current || !map.current.loaded()) return;

    // Update opacity based on selection/hover using data-driven expressions
    if (map.current.getLayer('region-dots')) {
      map.current.setPaintProperty('region-dots', 'circle-opacity', [
        'case',
        ['==', ['get', 'id'], selectedRegionId || ''],
        1,
        ['==', ['get', 'id'], hoveredRegionId || ''],
        0.9,
        0.8,
      ]);

      map.current.setPaintProperty('region-dots', 'circle-radius', [
        'interpolate',
        ['linear'],
        ['get', 'sentimentValue'],
        3,
        [
          'case',
          ['==', ['get', 'id'], selectedRegionId || ''],
          28,
          ['==', ['get', 'id'], hoveredRegionId || ''],
          22,
          16,
        ],
        15,
        [
          'case',
          ['==', ['get', 'id'], selectedRegionId || ''],
          36,
          ['==', ['get', 'id'], hoveredRegionId || ''],
          30,
          24,
        ],
      ]);

      map.current.setPaintProperty('region-dots', 'circle-stroke-width', [
        'case',
        ['==', ['get', 'id'], selectedRegionId || ''],
        4,
        ['==', ['get', 'id'], hoveredRegionId || ''],
        4,
        3,
      ]);
    }
  }, [selectedRegionId, hoveredRegionId]);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <div
        ref={mapContainer}
        className="w-full h-full"
        style={{ borderRadius: '16px' }}
      />
    </div>
  );
}
