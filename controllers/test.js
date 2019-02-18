var app = angular.module("app", []);
app.controller("myAppController", function($scope){
    $scope.name = "Hello World";
    console.log($scope.name);
});