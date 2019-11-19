require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;
const massive = require('massive');

// import from controller
const {getProblems} = require('./controller/problemCtrl');
const {login, logout, register, getSession} = require('./controller/authCtrl');

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    console.log('connected to db');
    app.set('db', db)
}) 

app.use(session({
    secret: SESSION_SECRET,
    resave: false, 
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
    })
);

// ENDPOINTS
app.get('/api/get_problems', getProblems);

// Auth endpoints
app.post('/auth/register', register);
app.post('/auth/login', login);
app.post('/auth/logout', logout);
app.get('/api/userSession', getSession);

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}🎶`))