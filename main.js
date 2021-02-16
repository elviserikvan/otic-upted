const path = require('path');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const keys = require(path.join(__dirname, 'config', 'keys'));

const app = express();
const db = mongoose.connection;
const PORT = process.env.PORT || 3000;
const corsOptions = {
	origin: '*',
	optionSucessStatus: 200
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

//app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(fileUpload());

app.use(express.static(path.join(__dirname, 'dist', 'telematicaApp')))

//app.use(express.urlencoded({extended: false}))

app.use('/api/products', require('./routes/api'));

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
});
