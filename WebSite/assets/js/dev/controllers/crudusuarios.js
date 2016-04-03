"use strict";

app.controller( 'crudusuariosCtrl', function($scope, $http, $window, $routeParams ){

	if($routeParams.UserId!=0){
		$http.get('http://localhost:'+$scope.puerto+'/api/users/'+$routeParams.UserId)
			.then(function(response){
				$scope.data = response.data;
				console.log(response.data);
				console.log($routeParams.UserId);
			});
	}


	$scope.save=function (){
		var data={ firstName: $("#firstName").val(),
			       lastName: $("#lastName").val(),
			       email: $("#email").val(),
			       username: $("#username").val(),
				   passwordhash: $("#passwordhash").val(),
			       enabled: true//($("#enabled").val()=="on"?true:false)
		};

		if($routeParams.UserId!=0){
			$http({
				method : "POST",
				url : "http://localhost:"+$scope.puerto+"/api/users/"+$routeParams.UserId,
				data: data
			}).then(function mySuccess(response) {
				console.log(response);
				console.log("Metodo save con parametro no."+$routeParams.UserId);
				//$window.location.href ="/usuarios";
			}, function myError(response) {
				console.log(response);
			});

		}
		else{
			$http({
				method : "POST",
				url : "http://localhost:"+$scope.puerto+"/api/users",
				data: data
			}).then(function mySuccess(response) {
				console.log(response);
				$window.location.href ="/usuarios";
			}, function myError(response) {
				console.log(response);
			});

		}


	}
});