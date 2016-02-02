'use strict';

var menu = angular.module('menu',['ngRoute']);

menu.controller('menuCtrl', ['$scope', function ($scope) {
	var menuItems = $scope.menuItems = [
		'Accueil',
		'Mémoires',
		'Comptes Rendus',
		'Actualité',
		'Salon'
	];

}]);

