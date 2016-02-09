define(['angularAMD', 'services/dataService'], function (angularAMD) {
	angularAMD.directive("locationAutocomplete", ['dataService', function (dataService){
			return {
				restrict : 'E',
				scope : {
					ngModel : '='
				},
				transclude : true,
				template : 	['<div ng-mouseleave="toggleList(\'close\')">',
					           	 '<div ng-transclude></div>',
					           	 '<ul class="auto-complete" ng-show="showList">',
									'<li class="auto-complete__list" ng-repeat="location in locations"><a class="auto-complete__list__anchor" href="" ng-click="updateLocation(location)">{{location.address.locality}} {{location.address.adminDistrict}} {{location.address.postalCode}}</a></li>',
								'</ul>',
							'</div>'].join(''),
								
				link : function(scope, $element, attrs){
					var $input = $element.find('input');
					scope.locations = [];
					scope.location = {};
					scope.showList = false;
					// Set input Attributes
					scope.name = attrs.name;
					// Get Location Call
					function getLocations(params){
						var config = {
								method: 'JSONP',
								url : 'http://dev.virtualearth.net/REST/v1/Locations/?jsonp=JSON_CALLBACK',
								params : params
							};
						
						dataService.httpRequest(config).then(
							function(response){
								scope.locations = response.data.resourceSets[0].resources;		
								processData();
							},function(error){
								scope.error = error;
								scope.locations = [];
								scope.toggleList('close');
						});
					}
					
					// Checks for zipcode case
					function processData(){
						if(scope.name === 'postalCode' && scope.locations.length === 1){
							scope.updateLocation(scope.locations[0]);
						}
						else{
							scope.showList = (scope.locations.length >= 1);
						}					
					}
					
					$input.keyup(function(e) {
						var inputVal = $(this).val();
					    
					    if(inputVal && inputVal.length >= 2){
			    			scope.getData(inputVal);
			    			if(scope.name !== 'postalCode'){
			    				scope.toggleList('open');
			    			}		    			
					    }
					});
					
					scope.toggleList = function(value){
						if(value === 'close'){
							scope.showList = false;
							scope.locations = [];
						}
						else{
							scope.showList = true;
						}
					};				
					
					scope.getData = function(data){
						var params = {                                                                                                                                                                                                                                                                                                                     
								key: 'Aif9kL_IbQO95flnHttxLsFlCrSI7tAzf5FlUWJdLw-VN-J1LtxGVx6GUPrbnfqV',
								q: data + ",US",
								maxResults: 10
							};
						scope.locations = [];
						if(data.length > 1 && scope.name !== 'postalCode'){
							getLocations(params);	
						}
						else if(data.length === 5 && scope.name === 'postalCode'){
							getLocations(params);
						}
					};		
					
					
					scope.updateLocation = function(location){
						//Emits Zip, City, State, Country
						scope.toggleList('close');
						scope.$emit('Updating.Location', location);
					};
				}
			};
	}]);
});