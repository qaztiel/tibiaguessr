import './App.css';
import { MapContainer, TileLayer, Popup, Marker, ImageOverlay, LatLngBounds } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


function App() {
  const position = [51.505, -0.09]
  const bound = [[0,0], [40.773941, -74.12544]];
  return (
    <div id="map">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ImageOverlay
          url={"https://tibiamaps.github.io/tibia-map-data/floor-07-map.png"}
          bounds={bound}
          opacity={0.5}
          zIndex={1000}
        />
  </MapContainer>
    </div>
    
  );
}

export default App;
