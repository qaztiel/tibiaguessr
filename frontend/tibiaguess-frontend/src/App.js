import './App.css';
import { MapContainer, TileLayer, Popup, Marker, ImageOverlay, LatLngBounds } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


function App() {
  const position = [0,0]
  const bound = [
    [-200,-200], 
    [200, 200]
  ];
  return (
    <div id="map">
      <MapContainer center={position} zoom={2} scrollWheelZoom={true}>
        <ImageOverlay
          url={"https://tibiamaps.github.io/tibia-map-data/floor-07-map.png"}
          bounds={bound}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
    
  );
}

export default App;
