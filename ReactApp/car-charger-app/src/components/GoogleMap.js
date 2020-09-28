import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 35.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: 'auto' }}>
        <GoogleMapReact
          //bootstrapURLKeys={{ key: /* AIzaSyD0ZybAGGAvmTckSF53PM9OB0kH5vum8uA */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={35.337844}
            text="X"
          />
          
            
            
          
         
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMap;