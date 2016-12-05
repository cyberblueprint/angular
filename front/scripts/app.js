angular.module('ang', [])
.controller('firstCtrl', function($scope){
    $scope.sayHi = function(clear){
        console.log("Clicked Binded value");
    }
});