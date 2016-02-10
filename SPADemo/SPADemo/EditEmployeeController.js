app.controller("EditEmployeeController", function ($scope, $location, ShareData, SPACRUDService) {
    getEmployee();

    function getEmployee() {
        var promiseGetEmployee = SPACRUDService.getEmployee(ShareData.value);

        promiseGetEmployee.then(function (pl) {
            $scope.Employee = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'failure loading Student', errorPl;
              });
    }

    $scope.save = function () {
        var Employee = {
            EmployeeID: $scope.Employee.EmployeeID,
            Name: $scope.Employee.EmployeeName,
            Email: $scope.Employee.Email,
            Class: $scope.Employee.Project,
            EnrollYear: $scope.Employee.DOJ,
            City: $scope.Employee.City,
            Country: $scope.Employee.Country
        };

        var promisePutEmployee = SPACRUDService.put($scope.Employee.EmployeeID, Employee);
        promisePutEmployee.then(function (pl) {
            $location.path("/showemployees");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Employee', errorPl;
              });
    };

});