import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Container } from 'react-bootstrap';

const ShowMap = () => {
  const [position, setPosition] = useState([13.499696402581934, 101.66775941848756]);

  const MapClickHandler = () => {
    const map = useMapEvents({
      click: (e) => {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });

    return null;
  };

  return (
    <Container>
      <MapContainer center={position} zoom={10} style={{ height: '600px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            {`Latitude: ${position[0].toFixed(6)}, Longitude: ${position[1].toFixed(6)}`}
          </Popup>
        </Marker>
        <MapClickHandler />
      </MapContainer>
    </Container>
  );
};

export default ShowMap;
