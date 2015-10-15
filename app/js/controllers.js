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
