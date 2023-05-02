import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const MapContainer = (props) => {
  return (
    <div className="w-full m-auto relative" style={{width:'100%'}}>
      <Map
        google={props.google}
        style={{ width: "100%", height: "200px", position: "relative " }}
        zoom={14}
        initialCenter={{
          lat: 47.444,
          lng: -122.176,
        }}
      />
    </div>
  );
};
export default GoogleApiWrapper({ 
    apiKey: "  AIzaSyCqUKEOocU-P6SyHyt2lQzXPS6wsSKDk2A  "   
})(MapContainer);  
