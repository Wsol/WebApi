"use strict";app.controller("rolesCtrl",function($scope,$http,$window){$http.get("http://localhost:"+$scope.puerto+"/api/roles").then(function(response){$scope.data=response.data}),$scope.deleteRol=function(RolId){console.log(RolId),$http({method:"DELETE",url:"http://localhost:"+$scope.puerto+"/api/roles/"+RolId}).then(function(response){console.log(response),$window.location.href="/roles"},function(response){console.log(response)})}});