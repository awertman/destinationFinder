

  // app setup =====================
  var express  = require('express');
  var application      = express();
  var mongoose = require("mongoose");
  var dotenv = require('dotenv');
  dotenv.load();

  // configuration =================
  application.configure(function() {
    application.use(express.static(__dirname + '/public'));
    application.use(express.logger('dev'));
    application.use(express.bodyParser());
  });

// db set up ==============================================================================================================================

  // db initialization
  mongoose.connect(process.env.MONGOHQ_URL)
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, '---------------------------------------------- connection error'));
  db.once('open', function callback () {
    console.log("---------------------------------------------- Database Connection Established" )
  });

  var destinationSchema = mongoose.Schema({
    title: String,
    url: String,
    description: String
  })

  var Destination = mongoose.model("Destination",destinationSchema)

  application.get('/destinations', function(req, res) {
    Destination.find( function (err, instances) {
      if (err) return console.error(err);
      res.json(instances)
    })
  })

// application ==========================================================================================================================+
  application.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });

  application.listen(8080);
  console.log("---------- App listening on port 8080 ----------");



