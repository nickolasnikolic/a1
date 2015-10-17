sApp.controller('IndexController', ['$scope', '$state', 'globals', function($scope, $state, globals) {}])

sApp.controller('HomeController', ['$scope', '$state', 'globals', function($scope, $state, globals) {

    $scope.locations = globals.locations;

    $scope.getDistances = function(){
        var zip = $('#zip').val();
        if(zip.length > 4){
            var latlng1;
            var latlng2;

            GMaps.geocode({
                address: zip,
                callback: function (results, status) {
                    if (status == 'OK') {
                        latlng1 = results[0].geometry.location;

                        _.each($scope.locations, function (element, index, list) {

                            var address = element.address1 + ' ' + element.zip;

                            GMaps.geocode({
                                address: address,
                                callback: function (results, status) {
                                    if (status == 'OK') {
                                        latlng2 = results[0].geometry.location;

                                        var service = new google.maps.DistanceMatrixService();
                                        service.getDistanceMatrix(
                                            {
                                                origins: [latlng1],
                                                destinations: [latlng2],
                                                travelMode: google.maps.TravelMode.DRIVING,
                                                unitSystem: google.maps.UnitSystem.IMPERIAL,
                                            }, function (response, status) {
                                                console.log(response);
                                            });
                                    }

                                }

                            });
                        });
                    }
                }
            });
            //otherwise here
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
