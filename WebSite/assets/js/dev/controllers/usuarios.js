"use strict";

app.controller( 'usuariosCtrl', function( $scope, $http, $window){
	 $http.get('http://localhost:'+$scope.puerto+'/api/users')
	 	.then(function(response){
	 		$scope.data = response.data;
			console.log(response.data);
	 	});

	$scope.deleteUser= function (UserId){
		console.log(UserId);
		$http({
			method : "DELETE",
			url : "http://localhost:"+$scope.puerto+"/api/users/"+UserId

		}).then(function mySuccess(response) {
			console.log(response);
			$window.location.href ="/usuarios";
		}, function myError(response) {
			console.log(response);
		});
	}
	//$scope.data=[{
	//		'nombre':'Carlos',
	//		'apellido':'Zelaya',
	//		'correo':'czelaya@gmail.com',
	//		'carrera':'Ingenieria en sistemas',
	//		'rol':'Alumno',
	//		'activo':'true'
	//	},{
	//		'nombre':'Ana',
	//		'apellido':'Caceres',
	//		'correo':'acaceres@gmail.com',
	//		'carrera':'Turismo',
	//		'rol':'maestro',
	//		'activo':'true'
	//	},{
	//		'nombre':'Melvin',
	//		'apellido':'Contreras',
	//		'correo':'mcontreras@gmail.com',
	//		'carrera':'Ingenieria en sistemas',
	//		'rol':'maestro',
	//		'activo':'false'
	//	}
	//]
});