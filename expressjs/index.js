const express = require('express')
const app = express()
const port = 4000
const data = require('./data.json');
var bodyParser = require('body-parser');
const {v4: uuidv4 } = require('uuid')
const bcrypt = require('bcryptjs');
const passport = require('passport');
const passportHttp = require('passport-http');
const cors = require('cors');

let date = new Date();

let users=[{
    id: uuidv4(),
    username: "TobiT",
    password: "$2a$08$dTjmxh6FxxT5OAd/WCYHX.Ty78AedJ0x52Hh0dPkp1MdiQwaKg0am",
    email: "JohnDoe@example.com",
    userChargingHistory: [{Date: date, Location: "Oulu Yilopisto", Charger_Type: "Fast", duration: 30, price: 10}, {Date: "05.10.2020",Location: "Oulu Airport", Charger_Type: "Fast", duration: 30, price: 10}]
},{

    id: uuidv4(),
    username: "JohnDoe",
    password: "$2a$08$cU47bKxiGGoIh6kuI3pwd.qUbzPiUSBcc17gdGrD1ZRJSxmyY0iPK",
    email: "JohnDoe@example.com",
    userChargingHistory: [{Location: "Espoo", Charger_Type: "Slow", duration: 10, price: 2}]
}];

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chargers', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json(data.chargers);
});

app.post('/:username/charge', (req,res) =>{
  const result = users.find(u=> u.username === req.params.username);

  result.userChargingHistory.push({
    Date: date,
    Location: req.body.Location,
    Charger_Type: req.body.Charger_Type, 
    duration: req.body.duration, 
    price: req.body.price
  })
  res.sendStatus(200); 
  });

app.post('/register', (req,res) =>{
  console.log(req.body);
  const passwordHash = bcrypt.hashSync(req.body.password, 8);
  users.push({
    id: uuidv4(),
    username: req.body.username,
    password: passwordHash,
    email: req.body.email,
    userChargingHistory: req.body.userChargingHistory
  });

  res.sendStatus(200);  
})

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:username', (req, res) => {
  const result = users.find(u=> u.username === req.params.username);
  res.json(result);
});

passport.use(new passportHttp.BasicStrategy(function (username, password, done){
  const userResult = users.find(user => user.username === username);
  if(userResult == undefined){
    done(null, false);
  }

  if(bcrypt.compareSync(password, userResult.password)==false){
    done(null, false);
  }  

  done(null, userResult);
}));

app.post('/login', passport.authenticate('basic', {session: false}), (req, res)=>{
  console.log('test');
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})