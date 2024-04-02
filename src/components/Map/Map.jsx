import React, { Component } from "react";

class Map extends Component {
    componentDidMount() {
        if (!window.google) {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAmqns69u9M576urM4bj05Pfj-eK-8txU0&callback=initMap&libraries=places`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
            script.onload = () => {
                this.initMap();
            };
        } else {
            this.initMap();
        }
    }

    initMap = () => {
        const map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: 38.5382, lng: -0.1188 },
            zoom: 15,
        });

        // Añadir marcador
        new window.google.maps.Marker({
            position: { lat: 38.53820922033693, lng: -0.11886422011837101 },
            map: map,
            title: "Mi marcador",
        });
    };

    render() {
        return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
    }
}

export default Map;
