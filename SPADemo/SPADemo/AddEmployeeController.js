app.controller('AddEmployeeController', function ($scope, SPACRUDService) {
    $scope.EmployeeID = 0;

    $scope.save = function () {
        var Employee = {
            EmployeeID: $scope.EmployeeID,
            EmployeeName: $scope.EmployeeName,
            Email: $scope.Email,
            Project: $scope.Project,
            DateOfJoining: $scope.DOJ,
            City: $scope.City,
            Country: $scope.Country
        };

        var promisePost = SPACRUDService.post(Employee);

        promisePost.then(function (pl) {
            alert("Employee Saved Successfully.");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Student', errorPl;
              });

    };

});