"use strict";

app.controller( 'crudrolesCtrl', function($scope, $http, $window,$routeParams ){

    if($routeParams.roleid!=0){
        $http.get('http://localhost:'+$scope.puerto+'/api/roles/'+$routeParams.roleid)
            .then(function(response){
                $scope.data = response.data;
                console.log(response.data);
                console.log($routeParams.roleid);
            });
    }


    $scope.save=function (){

        if($routeParams.roleid){
            var data={ Id:$("#id").val(),
                Name: $("#Name").val()
            };
            console.log(data);
            $http({
                method : "PUT",
                url : "http://localhost:"+$scope.puerto+"/api/roles/"+$routeParams.roleid,
                data: data//{id:$routeParams.roleid,role:data }

            }).then(function mySuccess(response) {
                console.log(response);

                $window.location.href ="/roles";
            }, function myError(response) {
                console.log(response);
            });

        }
        else{
            var data={
                Name: $("#Name").val()
            };
            $http({
                method : "POST",
                url : "http://localhost:"+$scope.puerto+"/api/roles",
                data: data
            }).then(function mySuccess(response) {
                console.log(response);
                $window.location.href ="/roles";
            }, function myError(response) {
                console.log(response);
            });

        }


    }
});



