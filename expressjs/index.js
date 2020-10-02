const express = require('express')
const app = express()
const port = 4000
const data = require('./data.json');
var bodyParser = require('body-parser');
const {v4: uuidv4 } = require('uuid')
const bcrypt = require('bcryptjs');
const passport = require('passport');
const passportHttp = require('passport-http');

let users=[];

app.use(bodyParser.json());
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chargers', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json(data.chargers);
});

app.post('/register', (req,res) =>{
  console.log(req.body);
  const passwordHash = bcrypt.hashSync(req.body.password, 8);
  users.push({
    id: uuidv4(),
    username: req.body.username,
    password: passwordHash,
    email: req.body.email
  });

  res.sendStatus(200);  
})

app.get('/users', (req, res) => {
  res.send(users);
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

app.get('/protectedresource', passport.authenticate('basic', {session: false}), (req, res)=>{
  console.log('test');
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})