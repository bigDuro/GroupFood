define(['app', 'services/pageDetailsService'], function (app) {
    app.controller('ContactCtrl', ['$scope', 'pageDetailsService', function ($scope, pageDetailsService) {
        $scope.pageTitle = pageDetailsService.pageTitle;
    }]);
});