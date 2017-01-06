angular.module('app', [
  'ngAnimate',
  'ui.bootstrap',
  'ngRoute',
  'app.queue',
  'app.overview'
]);

angular.module('app').config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/overview'});
}]);


angular.module('app').controller('NavCtrl', function($scope){

  $scope.isNavCollapsed = true;

});
