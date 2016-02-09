define(['angularAMD', 'services/pageDetailsService'], function (angularAMD) {
    angularAMD.controller('MainCtrl', ['$scope', 'pageDetailsService', function ($scope, pageDetailsService, $location) {
        $scope.$on('$routeChangeStart', function(next, current) {		   
		   	$scope.pageData = pageDetailsService.getPageData();
		});
    }]);
});