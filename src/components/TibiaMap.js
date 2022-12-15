import { MapContainer, Marker, ImageOverlay, useMapEvents, Popup } from 'react-leaflet'
import '../style/TibiaMap.css';
import { useState } from 'react';


export function TibiaMap() {
    const position = [0,0]
    
    // TODO: image bound needs work
    const bound = [
        [-250,-200], 
        [200, 200]
    ];

    // TODO: bounds need work to keep from panning too far from map
    const bounds = [
        [-350, -250], 
        [250, 350]
    ];

    
    return (
        <div id="map">
            <MapContainer 
                center={position} 
                zoom={3} 
                scrollWheelZoom={true}
                maxZoom={6}
                minZoom={2}
                trackResize={true}
                maxBounds={bounds}
                maxBoundsViscosity={.5}
                >
                    <ImageOverlay
                        url={"https://tibiamaps.github.io/tibia-map-data/floor-07-map.png"}
                        bounds={bound}
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href= "https://www.tibiamaps.io">TibiaMaps.io</a>'
                        Marker={[61.505, -0.09]}
                    />
                    
                    <LocationMarker/>
                    
            </MapContainer>
        </div>
    );
}


function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }