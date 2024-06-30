// src/components/Map.tsx
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import Pin from "./Pin/Pin"

export default function MyMap(props: any) {
  const { properties, position, zoom } = props

  return <MapContainer className="w-full h-full rounded-lg" center={position} zoom={zoom} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {properties.map((property:any) => (
      <Pin key={property.id} property={property} position={position}/>
    ))}
    
  </MapContainer>
}