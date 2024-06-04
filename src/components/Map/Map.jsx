import { APIProvider, Map as MapComponent, AdvancedMarker } from "@vis.gl/react-google-maps";

export default function Map() {
    const position = { lat: 38.5382, lng: -0.1188 };

    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
            <MapComponent style={{ width: "100%", height: "500px" }} defaultCenter={position} defaultZoom={15} mapId={import.meta.env.VITE_MAP_ID}>
                <AdvancedMarker position={position}></AdvancedMarker>
            </MapComponent>
        </APIProvider>
    );
}
