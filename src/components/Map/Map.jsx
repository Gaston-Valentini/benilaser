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

        // Crear el objeto de Places para buscar el lugar y crear el marcador
        const service = new window.google.maps.places.PlacesService(map);

        service.getDetails(
            {
                placeId: "ChIJBf045nEFYg0RNP5Zl-PEw7s", // Reemplaza 'TU_PLACE_ID' con el ID del lugar que deseas
            },
            (place, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    // Crea un marcador para el lugar
                    const marker = new window.google.maps.Marker({
                        position: place.geometry.location,
                        map: map,
                        title: place.name,
                    });

                    const infowindow = new window.google.maps.InfoWindow({
                        content: `<div><strong>${place.name}</strong><br>${place.formatted_address}<br><a href="${place.url}" target="_blank">Ver en Google Maps</a></div>`,
                    });

                    marker.addListener("click", () => {
                        infowindow.open({
                            anchor: marker,
                            map,
                            shouldFocus: false,
                        });
                    });
                }
            }
        );
    };

    render() {
        return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
    }
}

export default Map;
