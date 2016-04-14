var removeCtrl = angular.module('removeCtrl',[]);


removeCtrl.controller('removeController',['$scope',function($scope){

	$scope.customers=[
					{name:'Desh',location:'Delhi'},
					{name:'Amit',location:'Pune'},
					{name:'Deepak',location:'noida'}
				 ];
				 

	$scope.remove=function(id){
							$scope.customers.splice(id,1);							
							}					
						  

}]);

	 
				 
				 
				 
				 