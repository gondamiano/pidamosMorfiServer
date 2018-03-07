const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

//API file for interacting with MongoDB
const api = require('./server/routes/api');

//parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

//api location
app.use(cors({origin:true,credentials: true}));

app.use('/api', api);

// Send all other requests to the vue app
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});


// Set port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost port : ${port}`));