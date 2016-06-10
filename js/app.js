'use strict';

//Declaration de l'application 

var hutechApp = angular.module('hutechApp', [
	'ngRoute',
	'accueil',
	'menu',
	'memoires',
	'articles'
]);

hutechApp.config(['$routeProvider',
    function($routeProvider) { 
        
        // Système de routage
        $routeProvider
        .when('/Accueil' || '/', {
            templateUrl: 'templates/accueil.html',
            controller: 'accueilCtrl'
        })
        .when('/Mémoires', {
            templateUrl: 'templates/memoires.html',
            controller: 'articlesCtrl'
        })
        .otherwise({ redirectTo: '/Accueil' });
    }
]);

hutechApp.directive('slots', [function () {
	return {
		restrict: 'A',
		replace: true,
		transclude: true,
		templateUrl: 'templates/articles.html',
		link: function (scope, iElement, iAttrs) {
			
		}
	};
}]);

hutechApp.factory('Request', function () {

var url = 'php/get.php';
var req = new String();

  return {
    getArticle: function(category) {
      	if(category !== 'all')
      		req = "SELECT JSON FROM articles WHERE category = '"+category+"'";
      	else 
      		req = "SELECT JSON FROM articles";
		return $http.post(url,{
			'data' : {'req' : req}	
		});
    },
    getFile: function(){

    },
    getComment: function(){

    }
  };
});




