import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { ConservationInitiative } from '../../types';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet default icon issue
// We need to manually set the path to marker icons
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Center map component
const ChangeMapView = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  
  useEffect(() => {
    if (center) {
      map.setView(center, 8, {
        animate: true
      });
    }
  }, [center, map]);
  
  return null;
};

interface MapComponentProps {
  initiatives: ConservationInitiative[];
  selectedId: string | null;
  onMarkerClick: (id: string) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ initiatives, selectedId, onMarkerClick }) => {
  const [center, setCenter] = useState<[number, number]>([-14.235, -51.9253]); // Brazil center
  const [zoom, setZoom] = useState(4);
  
  useEffect(() => {
    if (selectedId) {
      const selected = initiatives.find(i => i.id === selectedId);
      if (selected) {
        setCenter(selected.coordinates);
        setZoom(8);
      }
    } else {
      // Default view of Brazil
      setCenter([-14.235, -51.9253]);
      setZoom(4);
    }
  }, [selectedId, initiatives]);
  
  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {initiatives.map((initiative) => (
        <Marker 
          key={initiative.id} 
          position={initiative.coordinates}
          eventHandlers={{
            click: () => onMarkerClick(initiative.id),
          }}
        >
          <Popup>
            <div className="text-center">
              <h3 className="font-bold mb-1">{initiative.name}</h3>
              <p className="text-sm text-gray-600">{initiative.location}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      
      <ChangeMapView center={center} />
    </MapContainer>
  );
};

export default MapComponent;