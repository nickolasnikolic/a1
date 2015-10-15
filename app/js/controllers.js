sApp.controller('IndexController', ['$scope', '$state', 'globals', function($scope, $state, globals) {}])

sApp.controller('HomeController', ['$scope', '$state', 'globals', function($scope, $state, globals) {

    $scope.locations = globals.locations;

    $scope.getDistance = function(){
        var zip = $('#zip').val();
        if(zip.length > 4){
            //pull distance matrix from google maps
        }
    };

}])

sApp.controller('LocationController', ['$scope', '$state', '$stateParams', 'globals', function($scope, $state, $stateParams, globals) {

    var where = {};

    where.name = $stateParams.location;

    $scope.locations = globals.locations;

    $scope.location = _.findWhere($scope.locations, where);

    //set map in place
    var map = new google.maps.Map(document.getElementById('detailMap'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });

}])

sApp.controller('ContactController', ['$scope', '$state', function($scope, $state) {}])
