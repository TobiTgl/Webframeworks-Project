import React from 'react';
import './App.css';
import ChargerList from './components/ChargerList';
import Menu from './components/Menu';
import axios from 'axios';
import GoogleMaps from './components/GoogleMaps';
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
      typedActivationCode:"",
      chargeHistory:"",
      signupUsername:"",
      signupPassword:"",
      signupEmail: "",
      userChargingHistory: {Date: "", Location: "", Charger_Type: "", duration: 0, price: 0},
      chargeTimer: 0,
      selectedCharger: "",
      users:[],
      intervalId: null,
      timerRunning: false,
      selectedChargerId: "",
      selectedCharger_available: "",

    }
  }

  //cors used for securutiy prevents loading api data from different server
 componentDidMount() {
    axios.get('http://localhost:4000/chargers')//this is a promise object
      .then((response) => { //javascrip promise --then
        this.setState({ chargerarr: response.data })
      
      });
      axios.get('http://localhost:4000/users')//this is a promise object
      .then((response) => { //javascrip promise --then
        this.setState({ users: response.data })
      
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

  onActivationCodeChange = (event) => {
    this.setState({ typedActivationCode: event.target.value });
    console.log(event.target.value);
  }


  onLogin = (currentUser) => {
    axios.post('http://localhost:4000/login', 
                {}, 
                {auth:
                  {
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

    let result = this.state.users.find(u=> u.username === this.state.signupUsername);

    console.log(result);
    console.log(this.state.users);
    if(result  === undefined){
      if(this.state.signupUsername !== "" && this.state.signupPassword !==""&& this.state.signupEmail !== ""){
        axios.post('http://localhost:4000/register',
        {
          username: this.state.signupUsername,
          password: this.state.signupPassword,
          email: this.state.signupEmail,
          userChargingHistory: [],
        })
        .then(response =>{
          console.log('Sign up successful');
        })
        .catch(error=>{console.log(error)})
      }
  }else{
    console.log('User already exists');
    console.log(this.state.users);
  }
  }

  stopCharging=(currentUser)=>{
   

    
    if(this.state.timerRunning){
      clearInterval(this.state.intervalId);
      this.setState({timerRunning: false});
      this.setState({chargeTimer: 0})
    }
    
    axios.post('http://localhost:4000/'+currentUser+'/charge',
    {
      Location: this.state.selectedCharger.City,
      Charger_Type: this.state.selectedCharger.Charger_Type,
      duration: this.state.chargeTimer,
      price: Math.round((this.state.selectedCharger.price * this.state.chargeTimer)*100)/100
    })
    .then(response =>{
      console.log('Charge successful');
    })
    .catch(error=>{console.log(error)})
    
  
  }

  startCharging=()=>{

    if(this.state.typedActivationCode === this.state.selectedCharger.id){
      console.log('correct code');
      if(this.state.timerRunning === false){
        //this.setState({selectedCharger[6]: 'occupied'});
        const startTime = Date.now() -this.state.chargeTimer;
        this.state.intervalId = setInterval(() => {
          this.setState({chargeTimer: Math.round((Date.now() - startTime)/1000), timerRunning: true}); 
        }, 1000);
        console.log(this.state.chargeTimer);
      }
  }else{
    console.log('wrong code');
  }
  
    
}

  onChargerSelect=(id)=>{
    
    let result = this.state.chargerarr.find(u=> u.id === id);
    this.setState({selectedCharger: result})
    this.setState({selectedChargerId : result.id});
    
  }

 
render(){
  
  return(
    <>

      
      <Router>
        <Menu onChange={ this.onSearchFieldChange } isAuthenticated={this.state.isAuthenticated} currentUser={this.state.typedUsername} usernameChange={ this.onUsernameChange} passwordChange={ this.onPasswordChange}  userLogin={this.onLogin}/>
        
        <Route exact path="/" render={props => 
          <GoogleMaps chargers ={this.state.chargerarr.filter((charger) => charger.City.includes(this.state.chargerSearch)|| charger.Charger_Type.includes(this.state.chargerSearch))}/>}>
        </Route>
        
        <Route exact path="/" render={props => 
          <ChargerList chargers={this.state.chargerarr.filter((charger) => charger.City.includes(this.state.chargerSearch)|| charger.Charger_Type.includes(this.state.chargerSearch))}/>}>
        </Route>
        
        <Route exact path="/signup" render={props => 
          <SignUp signUpClick= {this.onSignup} signUpUsername={this.onSignUpUsernameChange} signUpPassword={this.onSignUpPasswordChange} signUpEmail={this.onSignUpEmailChange}/>}>
        </Route>
        
        <ProtectedRoute isAuthenticated={this.state.isAuthenticated} path="/history" exact render={(props)=>
          <ChargingHistory history={this.state.chargeHistory}/>}>
        </ProtectedRoute>
        
        <ProtectedRoute isAuthenticated={this.state.isAuthenticated} path="/charge" exact render={(props)=>
          <Charge currentUser={this.state.typedUsername} charger={this.state.chargerarr} id={this.state.chargerarr.id} selectedCharger={this.state.selectedCharger} onActivationCodeChange={this.onActivationCodeChange} onChargerSelect={this.onChargerSelect} elapsedtime={this.state.chargeTimer} startCharging={this.startCharging} stopCharging={this.stopCharging} />}>
        </ProtectedRoute>
        
        
      
      </Router>  
        
    </>
  )
}
}

export default App;
