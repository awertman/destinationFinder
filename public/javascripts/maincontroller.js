var app = angular.module("app",[] ) // empty array is list of modules this app is dependent on
// mainController = function($scope,$http)

mainController = function($scope,$http,basket) {
  $scope.basket = basket
  // $scope.basket.seed()
  $scope.layout = 'list'

  $http.get('/destinations')
    .success(function(data) {
      $scope.basket.collection = data
  })


  // $http.post('/destinations')
  //   .success(function(data) {
  //     $scope.basket.collection = data
  // })

}


