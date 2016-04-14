var showDataCtrl = angular.module('showDataCtrl',[]);


showDataCtrl.controller('showDataController',['$scope',function($scope){
	
	$scope.customers=[
					{name:'Desh',location:'Delhi'},
					{name:'Amit',location:'Pune'},
					{name:'Deepak',location:'noida'}
				 ];
						  

}]);

	 
				 
				 
				 
				 