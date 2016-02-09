define(['app', 'services/pageDetailsService'], function (app) {
    app.controller('AboutCtrl', ['$scope', 'pageDetailsService', function ($scope, pageDetailsService) {
        $scope.pageTitle = pageDetailsService.pageTitle;
    }]);
});