import { useCallback, useMemo, useRef, useState } from "react"
import { Marker, Popup } from "react-leaflet"

const center = {
    lat: 55.7505,
    lng: 37.62,
  }
  
export default function DraggableMarker() {
const [draggable, setDraggable] = useState(false)
const [position, setPosition] = useState(center)
const markerRef = useRef(null)
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
    ref={markerRef}>
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