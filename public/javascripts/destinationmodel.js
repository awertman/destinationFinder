app.factory('basket', function() {
  searchItems = {
    collection: [],
    add: function( args ) {
      this.collection.push( new Destination( args ) )
    },
    remove: function(text) {
      for ( var i in this.collection ) {
        if ( this.collection[i].text == text ) {
          this.collection.splice(i,1)
        }
      }
    }
  }

  var Destination = function(args) {
    this.title = args.title
    this.url = args.url
    this.description = args.description
  }
  return searchItems
})
