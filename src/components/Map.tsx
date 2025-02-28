'use client'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


import "leaflet/dist/leaflet.css";
import  "leaflet-defaulticon-compatibility" 
import  "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css" 

export default function Map() {
    return (
          <MapContainer 
          preferCanvas={true}
          center={[51.505, -0.09]}
          zoom={11}
          scrollWheelZoom={true}
          style={{ height: window.innerHeight, width: window.innerWidth }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
          </MapContainer>
    )
}