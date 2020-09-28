import React from 'react';
import './App.css';
import ChargerList from './components/ChargerList';
import Menu from './components/Menu';
import axios from 'axios';
import GoogleMaps from './components/GoogleMaps';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';




class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      chargerarr:[],
      
  

    }
  }

  //cors used for securutiy prevents loading api data from different server
 componentDidMount() {
    axios.get('http://localhost:4000/chargers')//this is a promise object
      .then((response) => { //javascrip promise --then
        this.setState({ chargerarr: response.data })
      });
  }




render(){
  return(
    <>
      <Menu/>
      <GoogleMaps chargers={this.state.chargerarr}/>
      
      <ChargerList chargers={this.state.chargerarr}/>
      
      
    </>
  )
}
}

export default App;
