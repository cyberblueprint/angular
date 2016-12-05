angular.module('ang', [])
.controller('firstCtrl', function($scope){
    $scope.sayHi = function(clear){
        console.log("Clic.ked Binded value");
    };
    $scope.person = [];
    $scope.name = {};
    $scope.addGreeting = function(){
        $scope.person.push($scope.name);
    };
});