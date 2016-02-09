/* Page Data Service */
define(['angularAMD'], function (angularAMD) {
    angularAMD.service('pageDetailsService', ['$location', function ($location) {    	
        this.getPageData =  function(){
        	var currenlocation = $location.url(),
        		data = {
        			title : currenlocation.slice(1)
        		}
        	return data;
        }
    }]);
});