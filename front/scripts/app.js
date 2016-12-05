angular.module('ang', [])
.controller('firstCtrl', function($scope){
    $scope.hi = function(){
        console.log("Hello World");
.controller('firstCtrl', function($scope, dataService){
    $scope.sayHi = function(clear){
        console.log("Clic.ked Binded value");
    };
    $scope.person = [];
    $scope.name = {};
    $scope.addGreeting = function(){
        $scope.person.push($scope.name);
    };

    dataService.getData(function(response){
        console.log(response.data.person[0]);
        personData = response.data.person[0];
        $scope.person.push({personData});
    })
})
.service('dataService', function($http){
    this.getData = function(callback){
        $http.get('/somethingdifferentthanroot/').then(callback);
    }
});