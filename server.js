const express = require("express");

require('dotenv').config();

const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

//Setup database connection
/*
const db = require("knex")({
	client: 'pg',
	connection: {
		connectionsString: process.env.DATABASE_URL,
		ssl: true
	}
});
*/

const db = require("knex")({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: '',
		password: '',
		database: 'crud-practice-1'
	}
});

//Require database functions
const main = require("./controllers/main");

const app = express();

const whitelist = ['http://localhost:3001'];
const corsOptions = {
	origin: function (origin, callback) {
		if(whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	}
}

app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(morgan('combined'));


//Routes
//To be worked onz





//Server Connection
app.listen(process.env.PORT || 3000, () => {
	console.log(`app is running on port ${process.env.PORT || 3000}`)
})