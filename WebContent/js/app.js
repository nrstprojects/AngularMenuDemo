var myApp =   angular.module('myApp',['ngRoute', 'dataModule']);


myApp.controller('navController', function ($scope, $rootScope, $http){
	var vm = this;
	vm.dataList = [];
	$http.get('js/data.json')
    .success(function (jsonData) {
    	console.log("injsin");
    	console.log(jsonData);
    	vm.dataList = jsonData;
    	$rootScope.dataList = jsonData;
    	console.log(vm.dataList);
    	$rootScope.$broadcast("getDataList",jsonData);
                          
    });
	
	console.log("in nav ctrl");
	console.log($rootScope.dataList);
	
	
	$rootScope.$on('getDataList',function($event,data){
		vm.dataList = data;
	});
});




//Define route for site
myApp.config(['$routeProvider',function ($routeProvider){
        $routeProvider
                .when('/pages/:title',{
                    title: 'home',
                    templateUrl: 'pages/about.html'
                }) 
                .when('/home',{
                    title: 'home',
                    templateUrl: 'pages/home.html'
                })  
                .otherwise({
                    redirectTo: 'pages/notfound.html'
                });
    }]);