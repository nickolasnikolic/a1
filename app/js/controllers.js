sApp.controller('IndexController', ['$scope', '$state', 'globals', function($scope, $state, globals) {}])

sApp.controller('HomeController', ['$scope', '$state', 'globals', function($scope, $state, globals) {

    $scope.locations = globals.locations;

    $scope.getDistances = function(){
        var zip = $('#zip').val();
        if(zip.length > 4){
            var map;
            var latlng1;
            var latlng2;

            GMaps.geocode({
                address: zip,
                callback: function (results, status) {
                    if (status == 'OK') {
                        latlng1 = results[0].geometry.location;

                        _.each( $scope.locations, function( element, index, list ){

                            var address = element.address1 + ' ' + element.zip;

                            GMaps.geocode({
                                address: address,
                                callback: function (results, status) {
                                    if (status == 'OK') {
                                        latlng2 = results[0].geometry.location;
                                        map = new GMaps({
                                            div: '#map',
                                            lat: latlng1.lat(),
                                            lng: latlng1.lng(),
                                            zoom: 12
                                        });

                                        map.drawRoute({
                                            origin: [latlng1.lat(), latlng1.lng()],
                                            destination: [latlng2.lat(), latlng2.lng()],
                                            travelMode: 'driving',
                                            strokeColor: '#131540',
                                            strokeOpacity: 0.6,
                                            strokeWeight: 6
                                        });
                                        map.getRoutes({
                                            origin: [latlng1.lat(), latlng1.lng()],
                                            destination: [latlng2.lat(), latlng2.lng()],
                                            callback: function (e) {
                                                var time = 0;
                                                var distance = 0;
                                                for (var i=0; i<e[0].legs.length; i++) {
                                                    time += e[0].legs[i].duration.value;
                                                    distance += e[0].legs[i].distance.value;
                                                }
                                                console.log(time + " " + distance);
                                                element.timeToTravel = time/60 + ' minutes';
                                                element.distanceToTravel = distance/5280 + ' miles';
                                                $scope.$apply(); //kick it to the ui
                                            }
                                        });

                                    }
                                }
                            });
                        } )
                    }
                }
            });
        }
    };

}])

sApp.controller('LocationController', ['$scope', '$state', '$stateParams', 'globals', function($scope, $state, $stateParams, globals) {

    var where = {};

    where.name = $stateParams.location;

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
