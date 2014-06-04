var app = angular.module("app",[] )

mainController = function($scope,$http,basket) {
  $scope.basket = basket
  $scope.layout = 'list'

  $http.get('/destinations')
    .success(function(data) {
      $scope.basket.collection = data
  })

}


