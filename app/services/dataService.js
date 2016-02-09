
define(['angularAMD'], function (angularAMD) {
	angularAMD.service('dataService', ['$http', '$q', function($http, $q){		
		this.httpRequest = function(config){
			var deferred = $q.defer();
			$http({
				method: config.method, 
				url: config.url,
				data : config.data || {},
				params : config.params || {},
				cache: false,
				contentType : config.contentType || 'application/json'
			})
				.then(					
					function(response) {
						if(response.data){
							deferred.resolve(response);
						}
						else{
							deferred.reject('Error Fetching Data');
						}
					}, 
					function(error) {
						deferred.reject(error);
					});
			
			return deferred.promise;
		}
		
	}]);
});