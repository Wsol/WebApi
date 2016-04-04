"use strict";

app.controller( 'crudusuariosCtrl', function($scope, $http, $window, $routeParams ){

	if($routeParams.UserId!=0){
		$http.get('http://localhost:'+$scope.puerto+'/api/users/'+$routeParams.UserId)
			.then(function(response){
				$scope.data = response.data;
				console.log(response.data);
			});
	}


	$scope.save=function (){
		var data={ firstName: $("#firstName").val(),
			       lastName: $("#lastName").val(),
			       email: $("#email").val(),
			       username: $("#username").val(),
				   passwordhash: $("#passwordhash").val(),
			       enabled: true//$("#enabled").val()
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
});