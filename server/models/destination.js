( function() {
  var mongoose = require('../../node_modules/mongoose')
  var MONGOHQ_URL="mongodb://developer:d3v3l0p3r@oceanic.mongohq.com:10095/development_sandbox"
  mongoose.connect(MONGOHQ_URL);
  var db = mongoose.connection;
  var destinationSchema = mongoose.Schema({
    title: String,
    url: String,
    description: String
  })
  exports.Destination = mongoose.model("Destination",destinationSchema, 'destinations')
  exports.Database = db
}).call(this)


