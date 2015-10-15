sApp.controller('IndexController', ['$scope', '$state', 'globals', function($scope, $state, globals) {}])

sApp.controller('HomeController', ['$scope', '$state', 'globals', function($scope, $state, globals) {

    $scope.locations = globals.locations;

    $scope.getDistance = function(){
        var zip = $('#zip').val();
        if(zip.length > 4){
            //pull distance matrix from google maps
            alert('running');
        }
    };

}])

sApp.controller('LocationController', ['$scope', '$state', '$stateParams', 'uiGmapGoogleMapApi', 'globals', function($scope, $state, $stateParams, uiGmapGoogleMapApi, globals) {

    var where = {};

    where.name = $stateParams.location;

    $scope.locations = globals.locations;

    $scope.location = _.findWhere($scope.locations, where);


    var address;
    uiGmapGoogleMapApi.then(function(maps) {
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({address: $scope.location.address1}, function(result){
            console.log(result);
            //set map in place
            $scope.map = { center: { address: $scope.location.address1 }, zoom: 8 };

        });
    });
}])


sApp.controller('ContactController', ['$scope', '$state', function($scope, $state) {}])
