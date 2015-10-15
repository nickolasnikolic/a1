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
    var passVal = $scope.location;
    uiGmapGoogleMapApi.then(function(maps) {
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({address: passVal.address1 + passVal.zip }, function(result){
            console.log(result);
            //set map in place
            $scope.map = { center: { latitude: result[0].geometry.location.lat,  longitude: result[0].geometry.location.lng }, zoom: 8 };
            $scope.$apply();
        });
    });
}])


sApp.controller('ContactController', ['$scope', '$state', function($scope, $state) {}])
