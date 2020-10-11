(this["webpackJsonpcar-charger-app"]=this["webpackJsonpcar-charger-app"]||[]).push([[0],{13:function(e,t,a){e.exports={signUp:"SignUp_signUp__hJvz5",input:"SignUp_input__yjCaR",inputfield:"SignUp_inputfield__3Stns",button:"SignUp_button__xfe-k"}},14:function(e,t,a){e.exports={container:"Charge_container__p9Qno",menu:"Charge_menu__3_h2p",input:"Charge_input__hiufu",button:"Charge_button__fx7Qc"}},19:function(e,t,a){e.exports={historyContainer:"ChargingHistory_historyContainer__1_thp",history:"ChargingHistory_history__59YJL"}},37:function(e,t,a){e.exports={location:"Charger_location__Frwzs"}},38:function(e,t,a){e.exports={heading:"ChargerList_heading__1KRUN"}},41:function(e,t,a){e.exports=a(84)},46:function(e,t,a){},47:function(e,t,a){},8:function(e,t,a){e.exports={headerBackground:"Menu_headerBackground__7wsZP",container:"Menu_container__1XgG9",subCat:"Menu_subCat__3xhmc",brand:"Menu_brand__2DmVN",searchbar:"Menu_searchbar__35Kq3",login:"Menu_login__1DG23"}},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),i=a.n(o),c=(a(46),a(17)),s=a(18),l=a(21),u=a(20),g=(a(47),a(37)),h=a.n(g);function d(e){return r.a.createElement("div",{className:h.a.location},r.a.createElement("p",null,r.a.createElement("b",null,"Location: ",e.City),r.a.createElement("br",null),"Charging type: ",e.Charger_Type,r.a.createElement("br",null),"Status: ",e.Charger_availability,r.a.createElement("br",null),"Price: ",e.price,"\u20ac/second"))}var p=a(38),m=a.n(p);function C(e){return r.a.createElement("div",{className:m.a.heading},r.a.createElement("h3",null,"Charging Stations:"),e.chargers.map((function(e,t){return r.a.createElement(d,Object.assign({key:e.id},e,{id:t}))})))}var f=a(8),v=a.n(f),E=a(9),y=a(40),_=a(1);function b(e){var t,a=e.isAuthenticated,n=Object(y.a)(e,["isAuthenticated"]);return t=a?r.a.createElement(_.b,n):r.a.createElement(_.a,{to:"/"}),r.a.createElement(r.a.Fragment,null,t)}function S(e){return r.a.createElement("div",{className:v.a.headerBackground},r.a.createElement("div",{className:v.a.container},r.a.createElement("div",{className:v.a.brand},"GreenFuel"),r.a.createElement(E.b,{className:v.a.subCat,to:"/"},r.a.createElement("div",null,"Map")),r.a.createElement(b,{isAuthenticated:e.isAuthenticated,path:"/",render:function(e){return r.a.createElement(E.b,{className:v.a.subCat,to:"/charge"},r.a.createElement("div",null,"Select charger"))}}),r.a.createElement(b,{isAuthenticated:e.isAuthenticated,path:"/",render:function(e){return r.a.createElement(E.b,{className:v.a.subCat,to:"/history"},r.a.createElement("div",null,"Charging History"))}}),r.a.createElement(E.b,{className:v.a.subCat,to:"/signup"},r.a.createElement("div",null,"SignUp")),r.a.createElement("input",{className:v.a.searchbar,type:"text",placeholder:"Search for chargers",onChange:function(t){return e.onChange(t)}}),r.a.createElement("input",{className:v.a.login,type:"text",placeholder:"Username",onChange:function(t){return e.usernameChange(t)}}),r.a.createElement("input",{type:"password",placeholder:"Password",onChange:function(t){return e.passwordChange(t)}}),r.a.createElement("button",{className:v.a.login,onClick:function(){return e.userLogin(e.currentUser)}},"Login")))}var w=a(12),U=a.n(w),k=a(16),N={position:"relative",width:"100%",height:"500px"},A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={activeMarker:{},selectedPlace:{},showingInfoWindow:!1},e.onMarkerClick=function(t,a){e.setState({activeMarker:a,selectedPlace:t,showingInfoWindow:!0}),console.log(e.state.selectedPlace),console.log(t),console.log(a)},e.onInfoWindowClose=function(){return e.setState({activeMarker:null,showingInfoWindow:!1})},e.onMapClicked=function(){e.state.showingInfoWindow&&e.setState({activeMarker:null,showingInfoWindow:!1})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(k.Map,{onClick:this.onMapClicked,containerStyle:N,google:this.props.google,zoom:5,initialCenter:{lat:65.059386,lng:25.466103}},this.props.chargers.map((function(t,a){return r.a.createElement(k.Marker,{onClick:e.onMarkerClick,name:t.City,title:t.City,key:t.id,id:a,position:{lat:t.lat,lng:t.lng}})})),r.a.createElement(k.InfoWindow,{marker:this.state.activeMarker,onClose:this.onInfoWindowClose,visible:this.state.showingInfoWindow},r.a.createElement("div",null,r.a.createElement("h1",null,this.state.selectedPlace.Location),r.a.createElement("h1",null,this.state.selectedPlace.name))))}}]),a}(n.Component),P=Object(k.GoogleApiWrapper)({})(A),M=a(13),x=a.n(M);function T(e){return r.a.createElement("div",{className:x.a.signUp},r.a.createElement("div",{className:x.a.input},r.a.createElement("input",{className:x.a.inputfield,type:"text",placeholder:"Username",onChange:function(t){return e.signUpUsername(t)}}),r.a.createElement("input",{className:x.a.inputfield,type:"password",placeholder:"Password",onChange:function(t){return e.signUpPassword(t)}}),r.a.createElement("input",{className:x.a.inputfield,type:"text",placeholder:"Email",onChange:function(t){return e.signUpEmail(t)}}),r.a.createElement("button",{className:x.a.button,onClick:function(){return e.signUpClick()}},"Sign Up")))}var I=a(14),L=a.n(I);function j(e){return r.a.createElement("a",{onClick:function(){return e.onChargerSelect(e.id)}},e.City+" ",e.Charger_Type)}function D(e){return r.a.createElement("div",{className:L.a.container},r.a.createElement("div",{className:L.a.menu},r.a.createElement("a",null,"Select charger..."),e.charger.map((function(t,a){return r.a.createElement(j,Object.assign({onChargerSelect:e.onChargerSelect,id:e.id,key:t.id},t))}))),r.a.createElement("input",{className:L.a.input,type:"text",placeholder:"Activation code",onChange:function(t){return e.onActivationCodeChange(t)}}),r.a.createElement("button",{className:L.a.button,onClick:function(){return e.startCharging()}},"Start charging"),r.a.createElement("button",{className:L.a.button,onClick:function(){return e.stopCharging(e.currentUser)}},"Stop charging"),r.a.createElement("div",null,"Charging time: ",e.elapsedtime,"s"),r.a.createElement("div",null,"Charging price: ",Math.round(e.selectedCharger.price*e.elapsedtime*100)/100," \u20ac"))}var H=a(19),O=a.n(H);function W(e){return r.a.createElement("div",null,r.a.createElement("p",{className:O.a.history},"Date: ",e.Date+" UTC"," ",r.a.createElement("br",null),"Location: ",e.Location,r.a.createElement("br",null),"Charger type: ",e.Charger_Type,r.a.createElement("br",null),"Duration: ",e.duration,"s",r.a.createElement("br",null),"Price: ",e.price,"\u20ac"))}function R(e){var t=null;if(void 0!==e.history||""!==e.history||null!==e.history){var a=e.history;console.log(a),t=a.map((function(e,t){return r.a.createElement(W,Object.assign({key:e.Date},e,{id:t}))}))}return r.a.createElement("div",{className:O.a.historyContainer},"Charging History:",t)}var F=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onSearchFieldChange=function(e){console.log("Keyboard event"),console.log(e.target.value),n.setState({chargerSearch:e.target.value})},n.onUsernameChange=function(e){n.setState({typedUsername:e.target.value}),console.log(e.target.value)},n.onPasswordChange=function(e){n.setState({typedPassword:e.target.value}),console.log(e.target.value)},n.onSignUpPasswordChange=function(e){n.setState({signupPassword:e.target.value}),console.log(e.target.value)},n.onSignUpUsernameChange=function(e){n.setState({signupUsername:e.target.value}),console.log(e.target.value)},n.onSignUpEmailChange=function(e){n.setState({signupEmail:e.target.value}),console.log(e.target.value)},n.onActivationCodeChange=function(e){n.setState({typedActivationCode:e.target.value}),console.log(e.target.value)},n.onLogin=function(e){U.a.post("http://34.203.236.162/login",{},{auth:{username:n.state.typedUsername,password:n.state.typedPassword}}).then((function(e){console.log("login successful"),n.setState({isAuthenticated:!0})})).catch((function(e){console.log(e)})),console.log("click"),U.a.get("http://34.203.236.162/users/"+e).then((function(e){console.log(e.data),n.setState({chargeHistory:e.data}),console.log(n.state.chargeHistory)})).catch((function(e){console.log(e)})),console.log("click")},n.onloadHistory=function(e){},n.onSignup=function(){var e=n.state.users.find((function(e){return e.username==n.state.signupUsername}));console.log(e),console.log(n.state.users),void 0===e?""!=n.state.signupUsername&&""!=n.state.signupPassword&&""!=n.state.signupEmail&&U.a.post("http://34.203.236.162/register",{username:n.state.signupUsername,password:n.state.signupPassword,email:n.state.signupEmail,userChargingHistory:[]}).then((function(e){console.log("Sign up successful")})).catch((function(e){console.log(e)})):(console.log("User already exists"),console.log(n.state.users))},n.stopCharging=function(e){if(n.state.timerRunning){clearInterval(n.state.intervalId),n.setState({timerRunning:!1});var t=Math.round(n.state.selectedCharger.price*n.state.chargeTimer*100)/100;console.log(t),U.a.post("http://34.203.236.162/"+e+"/charge",{Location:n.state.selectedCharger.City,Charger_Type:n.state.selectedCharger.Charger_Type,duration:n.state.chargeTimer,price:t}).then((function(e){console.log("Charge successful"),console.log()})).catch((function(e){console.log(e)})),console.log(n.state.chargeTimer),n.setState({chargeTimer:0})}},n.startCharging=function(){if(n.state.typedActivationCode==n.state.selectedCharger.id){if(console.log("correct code"),0==n.state.timerRunning){var e=Date.now()-n.state.chargeTimer;n.state.intervalId=setInterval((function(){n.setState({chargeTimer:Math.round((Date.now()-e)/1e3),timerRunning:!0})}),1e3),console.log(n.state.chargeTimer)}}else console.log("wrong code")},n.onChargerSelect=function(e){var t=n.state.chargerarr.find((function(t){return t.id===e}));n.setState({selectedCharger:t}),n.setState({selectedChargerId:t.id})},n.state={chargerarr:[],chargerSearch:"",isAuthenticated:!1,typedUsername:"",typedPassword:"",typedActivationCode:"",chargeHistory:"",signupUsername:"",signupPassword:"",signupEmail:"",userChargingHistory:{Date:"",Location:"",Charger_Type:"",duration:0,price:0},Date:"",Location:"",Charger_Type:"",duration:0,price:0,chargeTimer:0,selectedCharger:"",users:[],intervalId:null,timerRunning:!1,selectedChargerId:"",selectedCharger_available:"",chargePrice:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;U.a.get("http://34.203.236.162/chargers").then((function(t){e.setState({chargerarr:t.data})})),U.a.get("http://34.203.236.162/users").then((function(t){e.setState({users:t.data})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(S,{onChange:this.onSearchFieldChange,onloadHistory:this.onloadHistory,isAuthenticated:this.state.isAuthenticated,currentUser:this.state.typedUsername,usernameChange:this.onUsernameChange,passwordChange:this.onPasswordChange,userLogin:this.onLogin}),r.a.createElement(_.b,{exact:!0,path:"/",render:function(t){return r.a.createElement(P,{chargers:e.state.chargerarr.filter((function(t){return t.City.includes(e.state.chargerSearch)||t.Charger_Type.includes(e.state.chargerSearch)}))})}}),r.a.createElement(_.b,{exact:!0,path:"/",render:function(t){return r.a.createElement(C,{chargers:e.state.chargerarr.filter((function(t){return t.City.includes(e.state.chargerSearch)||t.Charger_Type.includes(e.state.chargerSearch)}))})}}),r.a.createElement(_.b,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(T,{signUpClick:e.onSignup,signUpUsername:e.onSignUpUsernameChange,signUpPassword:e.onSignUpPasswordChange,signUpEmail:e.onSignUpEmailChange})}}),r.a.createElement(b,{isAuthenticated:this.state.isAuthenticated,path:"/history",exact:!0,render:function(t){return r.a.createElement(R,{history:e.state.chargeHistory,Date:e.state.Date,Location:e.state.Location,Charger_Type:e.state.Charger_Type,duration:e.state.duration,price:e.state.price})}}),r.a.createElement(b,{isAuthenticated:this.state.isAuthenticated,path:"/charge",exact:!0,render:function(t){return r.a.createElement(D,{currentUser:e.state.typedUsername,charger:e.state.chargerarr,id:e.state.chargerarr.id,selectedCharger:e.state.selectedCharger,onActivationCodeChange:e.onActivationCodeChange,onChargerSelect:e.onChargerSelect,elapsedtime:e.state.chargeTimer,startCharging:e.startCharging,stopCharging:e.stopCharging})}})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.46871c20.chunk.js.map