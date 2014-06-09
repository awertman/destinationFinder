app.filter('searchFor', function(){
  return function(data, searchString){
    if(!searchString){
      return data;
    }
    var result = [];
    pattern = ""
    filters = searchString.split(" ")

    filters.forEach( function(filter) {
      pattern += '(?=.*' + filter + ")"
    })

    var regEx = new RegExp(  pattern )
    for ( i in data ) {
      content = data[i].description.toLowerCase() + data[i].title.toLowerCase()
      if ( content.match( regEx ) ) {
        result.push(data[i])
      }
    }
    return result;
  };
});
