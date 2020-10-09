import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


 
const containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '500px'
  }


  
export class MapContainer extends Component {

  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

  onMarkerClick = (props, marker) =>{
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });
    console.log(this.state.selectedPlace);
    console.log(props);
    console.log(marker);
  }
  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };


  render() {
    
    return (
      <Map onClick={this.onMapClicked} containerStyle={containerStyle} google={this.props.google} zoom={5} initialCenter={{lat: 65.059386,lng: 25.466103,}}>
 
        {this.props.chargers.map((chargers, index) => <Marker onClick={this.onMarkerClick} name={chargers.City} title={chargers.City} key={chargers.id} id={index} position={{lat: chargers.lat, lng: chargers.long}}  />)}
          
        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.Location}</h1>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>

        

      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
 
})(MapContainer)