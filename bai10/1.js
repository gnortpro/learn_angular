 var app = angular.module('myApp',['ngMaterial']);
 app.controller('MyController',  function($scope){
  	$scope.nhieunguoi = [
  		{
  			'ten' : 'Nguyen Viet Trong',
  			'tuoi' : '26',
  			'chucvu': 'IT'
  		},
  		{
  			'ten' : 'Nguyen Trong',
  			'tuoi' : '26123',
  			'chucvu': 'ITsdds'
  		},
  		{
  			'ten' : 'Nguyen Viet',
  			'tuoi' : '26123',
  			'chucvu': 'ITsdfsdf'
  		},

  	];
  	$scope.changDisplay = function(x){
  		x.display = !x.display;
  	}
 })