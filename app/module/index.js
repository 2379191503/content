

var app=angular.module("app",["ui.router",'homeModule']);
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('home');
	$stateProvider.state({
		name:'home',
		url:'/home',
		templateUrl:"view/home.html",
		controller:"home"
	})
	.state({
		name:'guge',
		url:'/guge',
		templateUrl:"view/guge.html"
	})
	.state({
		name:'input',
		url:'/input',
		templateUrl:"view/input.html"
	})
	.state({
		name:'server',
		url:'/server',
		templateUrl:"view/server.html"
	})
	
})


