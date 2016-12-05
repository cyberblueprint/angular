angular.module('ang', [])
.controller('firstCtrl', function($scope){
    $scope.hi = function(){
        console.log("Hello World");
    }
});