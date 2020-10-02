import React from 'react';
import './App.css';
import ChargerList from './components/ChargerList';
import Menu from './components/Menu';
import axios from 'axios';
import GoogleMaps from './components/GoogleMaps';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from './components/SignUp';
import ChargingHistory from './components/ChargingHistory';
import ProtectedRoute from './components/ProtectedRoute';



class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      chargerarr:[],
      chargerSearch:"",
      isAuthenticated: true,

    }
  }

  //cors used for securutiy prevents loading api data from different server
 componentDidMount() {
    axios.get('http://localhost:4000/chargers')//this is a promise object
      .then((response) => { //javascrip promise --then
        this.setState({ chargerarr: response.data })
      });
  }

  onSearchFieldChange = (event) => {
    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ chargerSearch: event.target.value });
  }




render(){
  return(
    <>

      
      <Router>
        <Menu onChange={ this.onSearchFieldChange }/>
        <Route exact path="/" render={props => <GoogleMaps chargers={this.state.chargerarr.filter((charger) => charger.City.includes(this.state.chargerSearch)|| charger.Charger_Type.includes(this.state.chargerSearch))}/>}></Route>
        <Route exact path="/" render={props => <ChargerList chargers={this.state.chargerarr.filter((charger) => charger.City.includes(this.state.chargerSearch)|| charger.Charger_Type.includes(this.state.chargerSearch))}/>}></Route>
        <Route exact path="/signup" render={props => <SignUp/>}></Route>
        <ProtectedRoute isAuthenticated={this.state.isAuthenticated} path="/history" exact render={(props)=><ChargingHistory/>}></ProtectedRoute>
      </Router>  
        
    </>
  )
}
}

export default App;
