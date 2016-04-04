"use strict";

app.controller( 'crudusuariosCtrl', function($scope, $http, $window, $routeParams ){

	if($routeParams.UserId){
		$http.get('http://localhost:'+$scope.puerto+'/api/users/'+$routeParams.UserId)
			.then(function(response){
				$scope.data = response.data;
				console.log(response.data);
			});
	}

	$http.get('http://localhost:'+$scope.puerto+'/api/roles')
		.then(function(response){
			$scope.dataRoles = response.data;
			console.log($scope.dataRoles);
		});

	$scope.save=function (){

		if($routeParams.UserId){

			var data={ Id:$("#id").val(),
				FirstName: $("#firstName").val(),
				LastName: $("#lastName").val(),
				Email: $("#email").val(),
				Username: $("#username").val(),
				PasswordHash: $("#passwordhash").val(),
				Enabled: ($("#enabled").val()=="on"?true:false),
				UserRoles:[{Id:0, UserId:$("#id").val(), RoleId: $('#rolSelect').selected}]
			};

			console.log($("#enabled").val());
			$http({
				method : "PUT",
				url : "http://localhost:"+$scope.puerto+"/api/users/"+$routeParams.UserId,
				data: data
			}).then(function mySuccess(response) {
				console.log(response);
				$window.location.href ="/usuarios";
			}, function myError(response) {
				console.log(response);
			});

		}
		else{

			var data={ 	FirstName: $("#firstName").val(),
						LastName: $("#lastName").val(),
						Email: $("#email").val(),
						Username: $("#username").val(),
						PasswordHash: $("#passwordhash").val(),
						Enabled: true//($("#enabled").val()=="on"?true:false)
			};

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