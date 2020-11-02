import React from "react";
import styled from "styled-components/macro";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function MapVisual() {
  return (
    <Container>
      <MapContainer
        center={[-8.219233, 114.369225]}
        zoom={1}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-8.219233, 114.369225]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
}

export default MapVisual;

const Container = styled.div`
  width: 100%;
  height: 50%;
`;
