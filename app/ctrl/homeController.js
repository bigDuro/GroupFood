define(['app', 'services/pageDetailsService'], function (app) {
    app.controller('HomeCtrl', ['$scope', 'pageDetailsService', function ($scope, pageDetailsService) {
        $scope.pageTitle = pageDetailsService.pageTitle;
        $scope.data = {};
        $scope.data.deliveryAddress = '';

        $scope.$on('Updating.Location', function(event, data){
        	console.log(data);
        	var address = data.address;
        	$scope.data.deliveryAddress = (address.locality || '') + ' ' + (address.adminDistrict || '') + ' ' + (address.postalCode || '');
        });
    }]);
});