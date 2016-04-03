"use strict";

app.controller( 'usuariosCtrl', function( $scope, $http, $location){
	 $http.get('http://localhost:22002/api/users')
	 	.then(function(response){
	 		$scope.data = response.data;
	 	});

	  $scope.UserId=0;

	  $scope.navigate= function (UserId){
		  $scope.UserId=UserId;
		  $location.path("/crudusuarios");
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