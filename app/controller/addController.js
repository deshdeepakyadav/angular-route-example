var addCtrl = angular.module('addCtrl',[]);


addCtrl.controller('addController',['$scope',function($scope){
	
	
	$scope.customers=[
					{name:'Desh',location:'Delhi'},
					{name:'Amit',location:'Pune'},
					{name:'Deepak',location:'noida'}
				 ];
				 
				 
	$scope.add=	function(){
					$scope.customers.push({'name':$scope.nameTxt,'location':$scope.locationTxt})
					$scope.nameTxt="";
					$scope.locationTxt="";
						  }
						  
	

}]);

	 
				 
				 
				 
				 