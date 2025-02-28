'use client'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


import "leaflet/dist/leaflet.css";
import  "leaflet-defaulticon-compatibility" 
import  "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css" 

import "./styles.css"
import { Button } from '@telegram-apps/telegram-ui';
import DraggableMarker from './DraggableMarker';

export default function Map() {
    return (
          <MapContainer id={"map"}
          preferCanvas={true}
          center={[55.7505, 37.62]}
          zoom={11}
          scrollWheelZoom={true}
          style={{ height: window.innerHeight, width: window.innerWidth }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <DraggableMarker/>
            <Button>Press me!</Button>
          </MapContainer>
    )
}