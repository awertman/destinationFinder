

  // app setup =====================
  var express  = require('express');
  var application      = express();                 // create our application w/ express
  var mongoose = require("mongoose");               // mongo ORM

  // configuration =================
  application.configure(function() {
    application.use(express.static(__dirname + '/public'));     // set the static files location /public/img will be /img for users
    application.use(express.logger('dev'));                     // log every request to the console
    application.use(express.bodyParser());                      // pull information from html in POST
  });

// db set up ==============================================================================================================================

// info
  //
  // mongoose.connect(process.env.MONGOHQ_URL) add environment key for login
  // var MONGOHQ_URL="mongodb://developer:d3v3l0p3r@oceanic.mongohq.com:10095/development_sandbox.destinations"
  var MONGOHQ_URL="mongodb://developer:d3v3l0p3r@oceanic.mongohq.com:10095/development_sandbox"
//

  // db initialization
  mongoose.connect(MONGOHQ_URL);
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
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });

  // listen (start app with node server.js) ===================
  application.listen(8080);
  console.log("---------- App listening on port 8080 ----------");



