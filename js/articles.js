'use strict';

var articles = angular.module('articles',['ngRoute','hutechApp']);

articles.controller('articlesCtrl', ['$scope','$filter', function ($scope,$filter) {

	var orderBy = $filter('orderBy');
	//var triTag = $filter('triTag');
	$scope.onLoad = function(){
		var articles = $scope. 
	}

	var handleSuccess = function(data, status) {
       $scope.variableName = data;
       console.log($scope.variableName);
    };

	var articles = $scope.articles; // = !localStorage.getItem("articles")? new Array() : orderBy(JSON.parse(localStorage.getItem("articles")),'title');


	$scope.addArticle = function(){
		var id = Math.round(Math.random()*1000000000000).toString().replace(/0/g,"y").replace(9,"a");
		var article = {
			'id'    : id,
			'title' : "Oui oui au pays des trululu",
			'autor' : 'Jamon Sanchez',
			'tags'	: ['Enfance','ActeurReseau','Histoire'],
			'category' : 'memoire',
			'type'	: 'pdf'
		};
		articles.push(article);
		localStorage.removeItem("articles");
		localStorage.setItem("articles",JSON.stringify(articles));
	};

	$scope.openArticle = function(id){
		window.open("res/pdf/PenserPolitiqueSimondon.pdf");
	}

	$scope.sortArticle = function(critere){
		articles = orderBy(articles,critere);
	}

	$scope.articleByTag = function(tag){
		console.log(tag);
		var temp = new Array();
		articles.forEach( function(article) {
			if(article.tags.indexOf(tag) !== -1)
				temp.push(article);
		});
		$scope.articles = temp;
	}
}]);/*
	.filter('triTag', ['', function(){
        return function(input, symbol){
            // le code de notre filtre
        };
    }]);*/