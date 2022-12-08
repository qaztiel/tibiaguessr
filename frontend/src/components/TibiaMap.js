import { MapContainer, Marker, ImageOverlay } from 'react-leaflet'
import '../style/TibiaMap.css';


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
        <div id="map" className='inner'>
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
                    <Marker 
                        position={[0, 0]}
                        />
                    
            </MapContainer>
        </div>
    );
}