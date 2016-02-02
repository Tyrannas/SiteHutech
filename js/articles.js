'use strict';

var articles = angular.module('articles',['ngRoute']);

articles.controller('articlesCtrl', ['$scope', function ($scope) {

	var articles = $scope.articles = !localStorage.getItem("articles")? new Array() : JSON.parse(localStorage.getItem("articles"));
	console.log(articles);

	$scope.addArticle = function(){
		var id = Math.round(Math.random()*1000000000000);
		var article = {
			'id'    : id,
			'title' : 'Transduction des systèmes de pensée',
			'autor' : 'Gilbert Simondon & Michel Foucault',
			'tags'	: ['Philosophie','Transduction','Techniques'],
			'type'	: 'pdf'
		};
		articles.push(article);
		localStorage.removeItem("articles");
		localStorage.setItem("articles",JSON.stringify(articles));
	};

	$scope.openArticle = function(id){
		window.open("res/pdf/PenserPolitiqueSimondon.pdf");
	}
}]);