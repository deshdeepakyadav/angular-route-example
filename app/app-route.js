var myDataApp = angular.module('dataApp',['ngRoute','ngMeta','showDataCtrl','addCtrl','updateCtrl','removeCtrl']);
	
	myDataApp.config(['$routeProvider','ngMetaProvider',function($routeProvider,ngMetaProvider){
		  $routeProvider.
				when('/',{
				templateUrl: 'partial/list.html',
				controller: 'showDataController',
				meta:   {
						  //Sets 'Home Page' as the title when /home is open
						  title: 'Home page', 
						  description: 'This is the description of the home page!'
					    }				
				}).
				when('/add',{
				templateUrl: 'partial/add.html',
				controller: 'addController',
				meta:   {
						  title: 'Add page', 
						  description: 'This is the description of the Add page!'
					    }				
				}).
				when('/modify',{
				templateUrl: 'partial/modify.html',
				controller: 'updateController',
				meta:   {
						  title: 'Update page', 
						  description: 'This is the description of the Update page!'
					    }
				}).
				when('/delete',{
				templateUrl: 'partial/delete.html',
				controller: 'removeController',
				meta:   {
						  title: 'Delete page', 
						  description: 'This is the description of the Delete page!'
					    }
				}).
				otherwise({redirectTo: '/'});
				ngMetaProvider.useTitleSuffix(true);
				ngMetaProvider.setDefaultTag('description', 'This is the default description');
				ngMetaProvider.setDefaultTitle('ngMeta');
				ngMetaProvider.setDefaultTitleSuffix(' | ngMeta - Dynamic meta tags for your Angular SPA');

	}]).run(function(ngMeta) {
    ngMeta.init();
  });
