const path = require('path');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const keys = require(path.join(__dirname, 'config', 'keys'));

const app = express();
const db = mongoose.connection;
const PORT = process.env.PORT || 3000;
const corsOptions = {
	/*
	origin: ['http://localhost:4200', 'http://127.0.0.1:4200', 'http://127.0.0.1:3000'],
	'Access-Control-Allow-Origin': true,
	*/
	origin: true,
	credentials: true
}

// Connect to database
mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

db.on('open', () => {
	console.log('connected to databse');
})

db.on('error', err => {
	console.error.bind(console, 'connection error: ');
})

// Set cors
app.use(cors(corsOptions));

app.use(session({
	name: 'myname.sid',
	resave: false,
	saveUninitialized: false,
	secret: 'secret',
	cookie: {
		maxAge: 3600 * 60 * 60 * 24 * 7,
		httpOnly: false,
		secure: false
	}
}))

require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());

// Cookie parser
app.use(cookieParser())

//app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(fileUpload());

app.use(express.static(path.join(__dirname, 'dist', 'telematicaApp')))

//app.use(express.urlencoded({extended: false}))

app.use('/api/products', require('./routes/api'));
app.use('/api/users', require('./routes/user'));

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
});
