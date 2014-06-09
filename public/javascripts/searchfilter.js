app.filter('searchFor', function(){
  return function(data, searchString){
    if(!searchString){
      return data;
    }
    var result = [];
    var pattern = '(?=.*' + searchString.replace(" ", ')(?=.*\\b') + ")"
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
