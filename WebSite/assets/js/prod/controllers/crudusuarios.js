"use strict";app.controller("crudusuariosCtrl",function($scope,$http,$window,$routeParams){0!=$routeParams.UserId&&$http.get("http://localhost:"+$scope.puerto+"/api/users/"+$routeParams.UserId).then(function(response){$scope.data=response.data,console.log(response.data),console.log($routeParams.UserId)}),$scope.save=function(){var data={firstName:$("#firstName").val(),lastName:$("#lastName").val(),email:$("#email").val(),username:$("#username").val(),passwordhash:$("#passwordhash").val(),enabled:!0};0!=$routeParams.UserId&&$http({method:"POST",url:"http://localhost:"+$scope.puerto+"/api/users/"+$routeParams.UserId,data:data}).then(function(response){console.log(response),console.log("Metodo save con parametro no."+$routeParams.UserId)},function(response){console.log(response)})}});