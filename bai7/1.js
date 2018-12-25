 var app = angular.module('myApp',['ngMaterial']);
 app.controller('MyController',  function($scope){
 	$scope.display ='true';
 	$scope.old = 'Day la dong chu thu nhat';
 	$scope.changeDisplay =  function (){
 		$scope.display = !$scope.display;
 	}
 })
 
