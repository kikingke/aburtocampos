 angular.module('myApp', [])
      .controller('MyController', ['$scope', function ($scope) {

        $scope.cv = angular.copy(cv);
        $scope.partes = Object.keys($scope.cv.skills);
        console.log($scope.cv);
        $scope.size = function (Obj) {
           return Object.keys(Obj).length; };
        $scope.print = function (index) {
           if (index > 0) {
             return ", ";
           } else {
             return "";
           } 
       };
     
      }])

    .filter('capitalize', function() {
        return function(input, scope) {
            if (input!=null)
            input = input.toLowerCase();
            return input.substring(0,1).toUpperCase()+input.substring(1);
          }
    });
