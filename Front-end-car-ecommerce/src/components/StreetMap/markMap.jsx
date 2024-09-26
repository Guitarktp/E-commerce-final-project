import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Container, Form, Button } from 'react-bootstrap';

const MapComponent = ({ clickHandler }) => {
  const map = useMapEvents({
    click: (e) => {
      clickHandler(e.latlng.lat, e.latlng.lng);
    },
  });

  return null;
};

function MarkMap
() {
  const [markers, setMarkers] = useState([]);
  const [clickedPosition, setClickedPosition] = useState(null);

  const handleMapClick = (lat, lng) => {
    setMarkers([{ lat, lng }]);
    setClickedPosition({ lat, lng });
  };

  return (
    <Container>
      <MapContainer center={[13.7563, 100.5018]} zoom={7} style={{ height: '600px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lng]}>
            <Popup>
              {`Latitude: ${marker.lat}, Longitude: ${marker.lng}`}
            </Popup>
          </Marker>
        ))}
        <MapComponent clickHandler={handleMapClick} />
      </MapContainer>

      {clickedPosition && (
        <div className="mt-3">
          <p>Clicked Position:</p>
          <p>{`Latitude: ${clickedPosition.lat}, Longitude: ${clickedPosition.lng}`}</p>
        </div>
      )}
    </Container>
  );
}

export default MarkMap;