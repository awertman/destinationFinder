(function() {
  var mongoose = require( '../node_modules/mongoose' )
  var Destination = require( '../server/models/destination').Destination
  var db = require( '../server/models/destination').Database
  var data = require('../rake/data').SeedData
  console.log("-------------------------------------------- seeding")
  Destination.create( data, function(err, todo) { // data is currently global variable...
    if (err)
      console.log(err)
    console.log("-------------------------------------------- seeded database!")
    db.close()
    });
}).call(this)