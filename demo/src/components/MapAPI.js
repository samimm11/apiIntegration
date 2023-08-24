import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import * as configConstants from '../config/config'

const MapAPI = () => {
  const mapStyles = {
    height: '500px',
    width: '100%',
  };


  const defaultCenter = {  //delhi
    lat: 28.6139,
    lng: 77.2090,
  };

  const customerLocations = [
    { id: 1, name: 'Customer1', lat: 13.0827, lng: 80.2707 }, // Chennai
    { id: 2, name: 'Customer2', lat: 8.7642, lng: 78.1348 }, // Tuticorin 
    { id: 3, name: 'Customer3', lat: 12.9716, lng: 77.5946 }, // Banglore
    { id: 4, name: 'Customer4', lat: 19.0760, lng: 72.8777 }, // Mumbai
    { id: 5, name: 'Customer5', lat: 28.3949, lng: 84.1240 }, // Nepal   
    { id: 6, name: 'Customer6', lat: 30.3753, lng: 69.3451 }, // Pakistan   
  ];

  const { isLoaded } = useJsApiLoader({ googleMapsApiKey: configConstants.Google_Maps_API_Key });

  return (
    <>
      {isLoaded ? console.log("isLoaded", isLoaded) : ""}
      {isLoaded ? (
        <GoogleMap mapContainerStyle={mapStyles} zoom={3} center={defaultCenter}>
          <Marker position={defaultCenter} title='Delhi' />
          {customerLocations.map((customerLocation) => {
            return (<Marker key={customerLocation.id}
              position={{ lat: customerLocation.lat, lng: customerLocation.lng }}
              title={customerLocation.name}>
            </Marker>)
          })}
        </GoogleMap>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default MapAPI;
