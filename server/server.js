// const express = require('express');
// const app = express();
// const PORT = 8080;
// require('./src/database');
// app.get('/', (req, res) => {
//   res.send('Hello World ! ');
// });

// app.listen(PORT, function () {
//   console.log(`Server Listening on ${PORT}`);
// });
// index.js

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const port = 3031;
const config = require('./config/config');

const router = require('./routes/index');

app.use(logger('dev'));

const dbUrl = config.dbUrl;

const options = {
  keepAlive: 1,
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(dbUrl, options, (err) => {
  if (err) console.log(err);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, function () {
  console.log('Runnning on ' + port);
});
module.exports = app;
