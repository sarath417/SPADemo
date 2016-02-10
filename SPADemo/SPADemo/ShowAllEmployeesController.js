app.controller('ShowEmployeesController', function ($scope, $location, SPACRUDService, ShareData) {
    loadAllEmployeessRecords();

    function loadAllEmployeessRecords() {
        var promiseGetEmployee = SPACRUDService.getEmployees();

        promiseGetEmployee.then(function (pl) { $scope.Employees = pl.data},
              function (errorPl) {
                  $scope.error = errorPl;
              });
    }

    //To Edit Employee Information  
    $scope.editEmployee = function (EmployeeID) {
        ShareData.value = EmployeeID;
        $location.path("/editEmployee");
    }

    //To Delete a Employee  
    $scope.deleteEmployee = function (EmployeeID) {
        ShareData.value = EmployeeID;
        $location.path("/deleteEmployee");
    }
});