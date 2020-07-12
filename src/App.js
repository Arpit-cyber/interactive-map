import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

// function Map() {
//   return <GoogleMap
//     defaultZoom={10}
//     defaultCenter={{ lat: 28.752604, lng: 77.49793 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
//   </GoogleMap>
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map))

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={50}
    defaultCenter={{ lat: 28.752604, lng: 77.49793 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 28.752604, lng: 77.49793 }} />}
  </GoogleMap>
))

function App() {
  return (
    <div style={{ width: "100vw", height: '100vh'}}>
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC_3fasljrWlcAQCOWRK6k12K6Ad7bhyRw"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
