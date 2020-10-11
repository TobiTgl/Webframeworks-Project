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
const db = require('./db');

let date = null;
let saltRounds = 6;


app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chargers', (req, res) => {

  db.query('SELECT * FROM chargers').then(results => {
    res.json(results);
  })
});

app.post('/:username/charge', (req,res) =>{

  let username = req.params.username.trim();
  date = new Date;
  datetest = date.toISOString().substr(0, 19).replace('T', ' ');
  let dateformat= date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()+':' + date.getSeconds();
  let Location = req.body.Location.trim();
  let Charger_Type = req.body.Charger_Type.trim();
  let duration = req.body.duration;
  let price = req.body.price;
 
  db.query('INSERT INTO userChargingHistory (username, Date, Location, Charger_Type, duration, price) VALUES (?,?,?,?,?,?)', [username, datetest, Location, Charger_Type, duration, price])

  res.sendStatus(200); 
  });

  app.post('/chargers', (req,res) =>{
    
    let id = req.body.id;
    let lat= req.body.lat;
    let lng= req.body.long;
    let City = req.body.City.trim();
    let Charger_Type = req.body.Charger_Type.trim();
    let Charger_availability = req.body.Charger_availability.trim();
    let price = req.body.price;
  
    db.query('INSERT INTO chargers (id, lat, lng, City, Charger_Type, Charger_availability, price) VALUES (?,?,?,?,?,?,?)', 
    [id, lat, lng, City, Charger_Type, Charger_availability, price])
    .then(dbResults => {
      console.log(dbResults);
      res.sendStatus(201);
  })
  .catch(error => console.log(error));
  res.sendStatus(200); 
    });

app.post('/register', (req,res) =>{

  let username = req.body.username.trim();
  let password = req.body.password.trim();
  let email = req.body.email.trim();
  let id = uuidv4();

  if((typeof username === "string") &&
     (username.length > 4) &&
     (typeof password === "string") &&
     (password.length > 5))
  {
    bcrypt.hash(password, saltRounds).then(hash =>
      db.query('INSERT INTO users (id, username, password, email) VALUES (?,?,?,?)', [id, username, hash, email])
    )
    .then(dbResults => {
        console.log(dbResults);
        res.sendStatus(201);
    })
    .catch(error => res.sendStatus(500));

    
  }
  else {
    console.log("incorrect username or password, both must be strings and username more than 4 long and password more than 5 characters long");
    res.sendStatus(400);
  }
})

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users').then(results => {
    res.json(results);
  })
});

app.get('/users/:username', (req, res) => {

  db.query('SELECT * FROM users inner join userChargingHistory on users.username = userChargingHistory.username where users.username = ?', [req.params.username]
  ).then(results => {
    res.json(results);
  }).catch(error =>{ res.sendStatus(500); console.log(error); });
  
  
});


passport.use( new passportHttp.BasicStrategy((username, password, cb) => {
  db.query('SELECT id, username, password FROM users WHERE username = ?', [username]).then(dbResults => {

    if(dbResults.length == 0)
    {
      return cb(null, false);
    }

    bcrypt.compare(password, dbResults[0].password).then(bcryptResult => {
      if(bcryptResult == true)
      {
        cb(null, dbResults[0]);
      }
      else
      {
        return cb(null, false);
      }
    })

  }).catch(dbError => cb(err))
}));

app.post('/login', passport.authenticate('basic', {session: false}), (req, res)=>{
  console.log('test');
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


/* DB init */

/*
Promise.all(
  [
      db.query(`CREATE TABLE IF NOT EXISTS users(
          id VARCHAR(80) PRIMARY KEY NOT NULL,
          username VARCHAR(32) NULL,
          password VARCHAR(256) NULL,
          email VARCHAR(40) NULL
      );`),
      db.query(`CREATE TABLE IF NOT EXISTS userChargingHistory(
        username VARCHAR(80) PRIMARY KEY NOT NULL,
        Date VARCHAR(32) NULL,
        Location VARCHAR(40) NULL,
        Charger_Type VARCHAR(40) NULL,
        duration INT NULL,
        price DOUBLE NULL
    );`),
    db.query(`CREATE TABLE IF NOT EXISTS chargers(
      id VARCHAR(20) PRIMARY KEY,
      lat DOUBLE,
      lng DOUBLE,
      City VARCHAR(40),
      Charger_Type VARCHAR(40),
      Charger_availability VARCHAR(40),
      price DOUBLE
  );`)
    
      // Add more table create statements if you need more tables
  ]
).then(() => {
  console.log('database initialized');
  app.listen(port, () => {
      console.log(`Example API listening on http://localhost:${port}\n`);
  });
})
.catch(error => console.log(error));
*/