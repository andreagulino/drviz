/* ##########################################################
   Main Controller - Always active independently on the view
   ########################################################## */
app.controller('main_ctrl', function($scope, $http, $location, $rootScope) {

    // Extract the svg of the plot and download it
    $scope.downloadPlot = function() {

        $('#dwn').attr('href', 'data:application/octet-stream;base64,' + btoa($("#uc1").html())); 
        $('#dwn').attr('download', 'plot.svg');
        $('#dwn').click();

        document.getElementById("dwn").click();
    }

});

/* ####################
   Home Controller
   #################### */
app.controller('home_ctrl', function($scope, $location, $http, $rootScope) {

    /* # Initialization # */
    $rootScope.active_menu = "home";
    
     // Manage different kinds of tumor type
    $scope.tumorTypes = {
        current: null,
        available: []
    }

    // Retrieve the list of available tumor types
    $http({method: 'GET', url:  "./data/data-list.json"})
        .then(
        // SUCCESS
        function(response) {
            $scope.tumorTypes.available = response.data.types;

        }).catch(
        // ERROR
        function(response) {
            console.log(response);
            console.error("Error while retrieving the list of tumor types.")
        }
    );

    // Get the name of the current view
    view = $location.path(); 

});