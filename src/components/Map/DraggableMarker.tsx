import { useCallback, useMemo, useRef, useState } from "react"
import { Marker, Popup } from "react-leaflet"
import { Icon } from 'leaflet';

const center = {
    lat: 55.7505,
    lng: 37.62,
  }

const customIcon = new Icon({
  iconUrl: '/marker-new-icon.png', // Импортированное изображение
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
  shadowUrl: '/marker-shadow.png',
  shadowAnchor: [12, 40]
});
  
export default function DraggableMarker() {
const [draggable, setDraggable] = useState(false)
const [position, setPosition] = useState(center)
const markerRef = useRef<any>(null)
const eventHandlers = useMemo(
    () => ({
    dragend() {
        const marker = markerRef.current
        if (marker != null) {
        setPosition(marker.getLatLng())
        }
    },
    }),
    [],
)
const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
}, [])

return (
    <Marker
    draggable={draggable}
    eventHandlers={eventHandlers}
    position={position}
    ref={markerRef}
    icon={customIcon}
    >
    <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
        {draggable
            ? 'Передвигайте метку'
            : 'Кликните на это сообщение'}
        </span>
    </Popup>
    </Marker>
)
}