 var app = angular.module('myApp',['ngMaterial']);
 app.controller('MyController',  function($scope){
   $scope.nhieunguoi = [
   	{
   		"ten" : "Ten 1",
   		"tuoi" : "Tuoi 1",
   		"gioitinh": "Nam"
   	},
   	{
   		"ten" : "Ten 2",
   		"tuoi" : "Tuoi 2",
   		"gioitinh": "Nam"
   	},
   	{
   		"ten" : "Ten 2",
   		"tuoi" : "Tuoi 2",
   		"gioitinh": "Nam"
   	},

   ];
   $scope.display = "true";
   $scope.changeDisplay = function(){
   	$scope.display =  !$scope.display;
   }
   $scope.hienra = function(x){
   		x.hienra = !x.hienra;
   }
 })