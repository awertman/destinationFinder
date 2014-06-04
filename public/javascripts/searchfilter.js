// All filters must return a function. The first parameter
// is the data that is to be filtered, and the second is an
// argument that may be passed with a colon (searchFor:searchString)
app.filter('searchFor', function(){
  return function(data, searchString){
    if(!searchString){
      return data;
    }
    var result = [];
    var pattern = "(" + searchString.toLowerCase().replace(" ", ")|(" ) + ")"
    var regEx = new RegExp(  pattern , "g")
    for ( i in data ) {
      if ( regEx.test( data[i].description.toLowerCase()) ) {
        result.push(data[i])
      } else if ( regEx.test( data[i].title.toLowerCase()) ) {
        result.push(data[i])
      }
    }
    return result;
  };
});
