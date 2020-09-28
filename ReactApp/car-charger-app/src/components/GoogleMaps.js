import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


 
const containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '500px'
  }

export class MapContainer extends Component {
  render() {
    return (
      <Map containerStyle={containerStyle} google={this.props.google} zoom={5} initialCenter={{lat: 65.059386,lng: 25.466103,}}>
 
        

        {this.props.chargers.map((chargers, index) => <Marker name={chargers.Street} title={chargers.Street} key={chargers.id} id={index} position={{lat: chargers.lat, lng: chargers.long}}  />)}
                
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1></h1>
            </div>
        </InfoWindow>

        
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
 // apiKey: ("AIzaSyD0ZybAGGAvmTckSF53PM9OB0kH5vum8uA")
})(MapContainer)