import React from 'react'
import "./Contact.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon from "../Assets/locationmarker.svg";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
function Contactus() {
    const locations = [
        { position: [8.72479, 77.74452], name: "Thirunelveli" },
        { position: [8.95729, 77.29232], name: "Thenkasi" },
      ];
      const bounds = L.latLngBounds(locations.map((location) => location.position));
      const customIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: markerShadow,
        shadowSize: [41, 41],
        shadowAnchor: [12, 41],
      });
  return (
    <div className='Contactus'>
      <div className='contactus-heading-container'>
        <p className='Contactus-heading'>Contact<br/>
Us </p>
      </div>
      <div className='contactus-container'>
        <div className='map'>
        <MapContainer bounds={bounds} className="leaf-let-map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; OpenStreetMap contributors"
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location.position} icon={customIcon}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
        </div>
        <div className='mail-container'>
        <form className="Contact-inputs"
        //   ref={form}
        //   onSubmit={sendEmail}
          >
            <input
              className="text-input"
              placeholder="Name"
              type="text"
              required="required"
              name="from_name"
            ></input>
            <input
              className="text-input"
              placeholder="Email"
              type="email"
              required="required"
              name="email_id"
            ></input>
            <textarea
              className="input-textarea"
              placeholder="Enter the Message"
              required="required"
              name="message"
            ></textarea>
            <button className="Send-btn" >SEND</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contactus
