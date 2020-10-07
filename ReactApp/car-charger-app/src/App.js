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
import Charge from './components/Charge';
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
      userChargingHistory: {Date: "", Location: "", Charger_Type: "", duration: 0, price: 0},
      chargeTimer: 0,
      selectedCharger: "",

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


  onLogin = (currentUser) => {
    axios.post('http://localhost:4000/login', 
                {}, 
                {auth:{
                              username: this.state.typedUsername,
                              password: this.state.typedPassword
      }})
    .then((response) => {
      console.log('login successful');
      this.setState({ isAuthenticated: true });
      
    })
    .catch(error=>{console.log(error)})
    
    axios.get('http://localhost:4000/users/'+currentUser)//this is a promise object
    .then((response) => { //javascrip promise --then
      this.setState({ chargeHistory: response.data.userChargingHistory })
      console.log(this.state.typedUsername)
      console.log(response.data)
      console.log(this.state.chargeHistory)
    });
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

  onChargeStop=()=>{
    
    axios.post('http://localhost:4000/TobiT/charge',
    {
      Location: "Test",//this.state.selectedCharger.City
      Charger_Type: "Test",//this.state.selectedCharger.Charger_Type
      duration: 69, //this.state.elapsedtime
      price: 96 //this.state.selectedCharger.price*this.state.elapsedtime
    })
    .then(response =>{
      console.log('Charge successful');
    })
    .catch(error=>{console.log(error)})
    
  }

  chargeTimer=()=>{
  this.state.chargeTimer++

  }

  onChargerSelect=(id)=>{
    console.log('click')
    console.log(id)
    //let result = this.state.chargerarr.find(u=> u.id === id);
    //this.setState({selectedCharger: result})
  }




render(){
  
  return(
    <>

      
      <Router>
        <Menu onChange={ this.onSearchFieldChange } currentUser={this.state.typedUsername} usernameChange={ this.onUsernameChange} passwordChange={ this.onPasswordChange}  userLogin={this.onLogin}/>
        <Route exact path="/" render={props => <GoogleMaps chargers ={this.state.chargerarr.filter((charger) => charger.City.includes(this.state.chargerSearch)|| charger.Charger_Type.includes(this.state.chargerSearch))}/>}></Route>
        <Route exact path="/" render={props => <ChargerList chargers={this.state.chargerarr.filter((charger) => charger.City.includes(this.state.chargerSearch)|| charger.Charger_Type.includes(this.state.chargerSearch))}/>}></Route>
        <Route exact path="/signup" render={props => <SignUp signUpClick= {this.onSignup} signUpUsername={this.onSignUpUsernameChange} signUpPassword={this.onSignUpPasswordChange} signUpEmail={this.onSignUpEmailChange}/>}></Route>
        <ProtectedRoute isAuthenticated={this.state.isAuthenticated} path="/history" exact render={(props)=><ChargingHistory  history={this.state.chargeHistory}/>}></ProtectedRoute>
        <Route isAuthenticated={this.state.isAuthenticated} path="/charge" exact render={(props)=><Charge charger={this.state.chargerarr} id={this.state.chargerarr.id} selectedCharger={this.selectedCharger} onChargerSelect={this.onChargerSelect} elapsedtime={this.state.chargeTimer} chargeTimer={this.chargeTimer}/*onChargeStop={this.onChargeStop}*/ />}></Route>
      </Router>  
        
    </>
  )
}
}

export default App;
