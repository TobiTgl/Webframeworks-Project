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
      isAuthenticated: false,
      typedUsername: "",
      typedPassword: "",
      chargeHistory:"",
      signupUsername:"",
      signupPassword:"",
      signupEmail: "",
      userChargingHistory: {Location: "", Charger_Type: "", duration: 0, price: 0},

    }
  }

  //cors used for securutiy prevents loading api data from different server
 componentDidMount() {
    axios.get('http://localhost:4000/chargers')//this is a promise object
      .then((response) => { //javascrip promise --then
        this.setState({ chargerarr: response.data })
      });
  }

  userChargeHistory = (id) => {
    axios.get('http://localhost:4000/users/:'+id)//this is a promise object
    .then((response) => { //javascrip promise --then
      this.setState({ chargeHistory: response.data })
    });
  }

  onSearchFieldChange = (event) => {
    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ chargerSearch: event.target.value });
  }

  onUsernameChange = (event) => {
    this.setState({ typedUsername: event.target.value });
    console.log(event.target.value);
  }

  onPasswordChange = (event) => {
    this.setState({ typedPassword: event.target.value });
    console.log(event.target.value);
  }
  onSignUpPasswordChange = (event) => {
    this.setState({ signupPassword: event.target.value });
    console.log(event.target.value);
  }

  onSignUpUsernameChange = (event) => {
    this.setState({ signupUsername: event.target.value });
    console.log(event.target.value);
  }

  onSignUpEmailChange = (event) => {
    this.setState({ signupEmail: event.target.value });
    console.log(event.target.value);
  }


  onLogin = () => {
    axios.post('http://localhost:4000/login', 
                {}, 
                {auth:{
                              username: this.state.typedUsername,
                              password: this.state.typedPassword
      }})
    .then((response) => {
      console.log('login successful');
      this.setState({ isAuthenticated: true })
    })
    .catch(error=>{console.log(error)})
    
  }

  onSignup = () => {
    
    if(this.state.signupUsername != "" && this.state.signupPassword !=""&& this.state.signupEmail != ""){
    axios.post('http://localhost:4000/register',
    {
      username: this.state.signupUsername,
      password: this.state.signupPassword,
      email: this.state.signupEmail,
      userChargingHistory: this.state.userChargingHistory
    })
    .then(response =>{
      console.log('Login successful');
    })
    .catch(error=>{console.log(error)})
    }
  }

  



render(){
  return(
    <>

      
      <Router>
        <Menu onChange={ this.onSearchFieldChange } usernameChange={ this.onUsernameChange} passwordChange={ this.onPasswordChange}  userLogin={this.onLogin}/>
        <Route exact path="/" render={props => <GoogleMaps chargers={this.state.chargerarr.filter((charger) => charger.City.includes(this.state.chargerSearch)|| charger.Charger_Type.includes(this.state.chargerSearch))}/>}></Route>
        <Route exact path="/" render={props => <ChargerList chargers={this.state.chargerarr.filter((charger) => charger.City.includes(this.state.chargerSearch)|| charger.Charger_Type.includes(this.state.chargerSearch))}/>}></Route>
        <Route exact path="/signup" render={props => <SignUp signUpClick= {this.onSignup} signUpUsername={this.onSignUpUsernameChange} signUpPassword={this.onSignUpPasswordChange} signUpEmail={this.onSignUpEmailChange}/>}></Route>
        <ProtectedRoute isAuthenticated={this.state.isAuthenticated} path="/history" exact render={(props)=><ChargingHistory/>}></ProtectedRoute>
      </Router>  
        
    </>
  )
}
}

export default App;
