app.controller("DeleteEmployeeController", function ($scope, $location, ShareData, SPACRUDService) {

    getEmployee();
    function getEmployee() {

        var promiseGetEmployee = SPACRUDService.getEmployee(ShareData.value);


        promiseGetEmployee.then(function (pl) {
            $scope.Employee = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'failure loadinge employee', errorPl;
              });
    }

    $scope.delete = function () {
        var promiseDeleteEmployee = SPACRUDService.delete(ShareData.value);

        promiseDeleteEmployee.then(function (pl) {
            $location.path("/showemployees");
        },
              function (errorPl) {
                  $scope.error = 'failure loading employee', errorPl;
              });
    };

});