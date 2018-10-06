const express = require('express');
const app = module.exports = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const rfs = require('rotating-file-stream');
const config = require('./config');
const env = app.settings.env;

const accessLogStream = rfs(config[env].logs.filename, {
  interval: config[env].logs.rotate,
  path: config[env].logs.logDirectory
});

fs.existsSync(config[env].logs.logDirectory) || fs.mkdirSync(config[env].logs.logDirectory);

app.use(morgan('combined', {stream: accessLogStream})); //save logs into file, rotate daily
app.use(bodyParser.json()) // for parsing application/json
app.use('/static', express.static(__dirname + '/public')); //public folder to serve css, js files
// app.set('views', __dirname + '/views'); //default entry view path

// require(__dirname + '/server/router/peopleRouter');
require(__dirname + '/server/router/carRouter');

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.listen(config[env].port, function () {
  console.log(`app is on ${env} mode and listening to port ${config[env].port}!`)
});
