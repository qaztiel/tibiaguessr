import { MapContainer, Marker, ImageOverlay, useMapEvents, Popup } from 'react-leaflet'
import '../style/TibiaMap.css';
import { LocationMarker } from './MapMarker';
import { useState } from 'react';

// https://react-leaflet.js.org/docs/example-external-state/
export function TibiaMap() {
    
    // TODO: image bound needs work
    const bound = [
        [0, 0], // Top-left corner of the image
        [2560, 2048] // Bottom-right corner of the image
    ];


    return (
        <div id="map">
            <MapContainer 
                center={ [0,0] } 
                zoom={13} 
                scrollWheelZoom={true}
                minZoom={-1}
                > 
                <ImageOverlay
                    url={"https://tibiamaps.github.io/tibia-map-data/floor-07-map.png"}
                    bounds={bound}
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href= "https://www.tibiamaps.io">TibiaMaps.io</a>'

                />
                <LocationMarker />
            
            </MapContainer>
        </div>
    );
}


