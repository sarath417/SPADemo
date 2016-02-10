var app = angular.module("ApplicationModule", ["ngRoute"]);
app.factory("ShareData", function() {
    return {value : 0}
});

app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
    debugger;

    $routeProvider.when('/showemployees',
                           {
                              templateUrl: 'ManageEmployeeInfo/ShowAllEmployees',
                              controller: 'ShowEmployeesController'
                           });

    $routeProvider.when('/addemployee',
                           {
                               templateUrl: 'ManageEmployeeInfo/AddEmployee',
                               controller: 'AddEmployeeController'
                           });

        $routeProvider.when('/deleteemployee',
                           {
                               templateUrl: 'ManageEmployeeInfo/DeleteEmployee',
                               controller: 'DeleteEmployeeController'
                           });

        $routeProvider.when('/editemployee',
                              {
                                  templateUrl: 'ManageEmployeeInfo/EditEmployee',
                                  controller: 'EditEmployeeController'
                              });

        $routeProvider.otherwise(
                            {
                                redirectTo: '/'
                            });

        $locationProvider.html5Mode(true).hashPrefix('!');
    }]
);