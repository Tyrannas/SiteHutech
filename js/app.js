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
		template: '<div ng-repeat="article in articles track by $index" class="slotContainer">' + 
					  '<div class="slot" id={{article.id}} ng-click="openArticle(this.id)">' + 
						'<p class="titre">{{article.title}}</p>'+
					  '</div>'+
					  '<div class="tagContainer">' +
						 '<span ng-repeat="tag in article.tags track by $index" class="tag">{{tag}}</span>'+
					  '</div>'+
					'</div>',
		link: function (scope, iElement, iAttrs) {
			
		}
	};
}])




