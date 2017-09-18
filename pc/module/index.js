var app=angular.module("app",["ui.router","homeModule"]);
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("home");
	$stateProvider.state({
		name:'home',
		url:'/home',
		templateUrl:'view/home.html',
		controller:'home'
	})
	.state({
		name:'about',
		url:'/about',
		templateUrl:'view/about.html'
	})
})
