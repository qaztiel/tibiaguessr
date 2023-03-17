import { MapContainer, Marker, ImageOverlay, useMapEvents, Popup } from 'react-leaflet'
import '../style/TibiaMap.css';
import { LocationMarker } from './MapMarker';

// https://react-leaflet.js.org/docs/example-external-state/
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
                zoom={2} // default zoom level
                scrollWheelZoom={true}
                maxZoom={5} // max zoom in level
                minZoom={1} // max zoom out level
                trackResize={true}
                maxBounds={bounds}
                maxBoundsViscosity={.5}
                >
                    <ImageOverlay
                        url={"https://tibiamaps.github.io/tibia-map-data/floor-07-map.png"}
                        bounds={bound}
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href= "https://www.tibiamaps.io">TibiaMaps.io</a>'
                        Marker={[300, 300]}
                    />
                    
                    <LocationMarker/>
                    
            </MapContainer>
        </div>
    );
}


