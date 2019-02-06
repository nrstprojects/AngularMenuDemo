var dataModule = angular.module('dataModule', []);

dataModule.controller('DataController', function($scope, $rootScope, $routeParams, $filter){
	var vm = this;
	var title = $routeParams.title;
	console.log(title);
	var jsonData = $rootScope.dataList;
	console.log(jsonData);
	console.log("in datahvgh");
	var object_by_title = $filter('filter')(jsonData, {type: title })[0];
	console.log(object_by_title.list);
	vm.tableData = object_by_title.list;
	if(object_by_title.list){
		$rootScope.$broadcast("getTableList",object_by_title.list);
	}
	
	
	$rootScope.$on('getTableList',function($event,data){
		vm.tableData = data;
	});
	
	
});