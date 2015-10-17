sApp.controller('IndexController', ['$scope', '$state', 'globals', function($scope, $state, globals) {}])

sApp.controller('HomeController', ['$scope', '$state', 'globals', function($scope, $state, globals) {

    $scope.locations = globals.locations;

    $scope.getDistances = function(){
        var zip = $('#zip').val();
        if(zip.length > 4){
            var addresses = [];
            _.each($scope.locations, function (element, index, list) {
                addresses.push( element.address1 + ' ' + element.address2 + ' ' + element.zip );
            });

            var service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix({
                    origins: [zip],
                    destinations: addresses,
                    travelMode: google.maps.TravelMode.DRIVING,
                    unitSystem: google.maps.UnitSystem.IMPERIAL,
                }, function (response, status) {
                _.each( $scope.locations, function(element,index,list){
                    element.distanceToTravel = response.rows[0].elements[index].distance.text;
                    element.timeToTravel = response.rows[0].elements[index].duration.text;
                });
                $scope.$apply();
            });
        }
    };

    $scope.sortDistanceToTravel = function( location ){

        if( location.distanceToTravel ) {

            var stringy = location.distanceToTravel;

            return Number(stringy.replace(' mi', ''));
        }else{
            return 1;
        }
    };

}])

sApp.controller('LocationController', ['$scope', '$state', '$stateParams', 'globals', function($scope, $state, $stateParams, globals) {

    var where = {};

    where.id = Number($stateParams.location);

    $scope.locations = globals.locations;

    $scope.location = _.findWhere($scope.locations, where);

    var l = $scope.location;

    GMaps.geocode({
        address: l.address1 + ' ' + l.zip,
        callback: function(results, status) {
            if (status == 'OK') {
                var latlng = results[0].geometry.location;

                var map = new GMaps({
                    div: '#detailMap',
                    lat: -12.043333,
                    lng: -77.028333
                });

                map.setCenter(latlng.lat(), latlng.lng());
                map.addMarker({
                    lat: latlng.lat(),
                    lng: latlng.lng()
                });
            }
        }
    });

}])


sApp.controller('ContactController', ['$scope', '$state', function($scope, $state) {}])
