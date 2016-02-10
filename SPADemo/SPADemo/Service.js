app.service("SPACRUDService", function ($http) {

    //Read all Students  
    this.getEmployees = function () {

        return $http.get("/api/ManageEmployeeInfoAPI");
    };

    //Fundction to Read Employee by Employee ID  
    this.getEmployees = function (id) {
        return $http.get("/api/ManageEmployeeInfoAPI/" + id);
    };

    //Function to create new Employee  
    this.post = function (employee) {
        var request = $http({
            method: "post",
            url: "/api/ManageEmployeeInfoAPI",
            data: employee
        });
        return request;
    };

    //Edit Employee By ID   
    this.put = function (id, employee) {
        var request = $http({
            method: "put",
            url: "/api/ManageEmployeeInfoAPI/" + id,
            data: employee
        });
        return request;
    };

    //Delete Employee By Employee ID  
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/ManageEmployeeInfoAPI/" + id
        });
        return request;
    };
});