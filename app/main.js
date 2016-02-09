require.config({
	paths : {
		'jquery' : '../node_modules/jquery/dist/jquery',
		'angular' : '../node_modules/angular/angular',		
		'angular-route' : '../node_modules/angular-route/angular-route',
		'angular-touch' : '../node_modules/angular-touch/angular-touch',
		'angularAMD' : '../node_modules/angular-amd/angularAMD',
		'app' : '../app/app'
	},
	shim : {
		'angularAMD': ['angular'], 
		'angular-route': ['angular'],
		'app' : {
			deps : ['angularAMD']
		}
	},
	deps: ['jquery', 'app']
});

// require(['app', function(){
// 	angular.bootstrap(document, ['app']);
// }]);

