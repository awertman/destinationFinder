(function() {
  var mongoose = require( '../node_modules/mongoose' )
  var Destination = require( '../server/models/destination').Destination
  var db = require( '../server/models/destination').Database
  response = Destination.remove( {}, { writeConcern: { w: "majority", wtimeout: 5000 } } )
  console.log("-------------------------------------------- dropped database")
  db.close()
}).call(this)