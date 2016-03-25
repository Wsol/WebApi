"use strict";

app.controller( 'usuariosCtrl', function( $scope, $http){
	// $http.get('api/usuarios')
	// 	.then(function(response){
	// 		$scope.data = response.data;
	// 	});
	$scope.data=[{
			'nombre':'Carlos',
			'apellido':'Zelaya',
			'correo':'czelaya@gmail.com',
			'carrera':'Ingenieria en sistemas',
			'rol':'Alumno',
			'activo':'true'
		},{
			'nombre':'Ana',
			'apellido':'Caceres',
			'correo':'acaceres@gmail.com',
			'carrera':'Turismo',
			'rol':'maestro',
			'activo':'true'
		},{
			'nombre':'Melvin',
			'apellido':'Contreras',
			'correo':'mcontreras@gmail.com',
			'carrera':'Ingenieria en sistemas',
			'rol':'maestro',
			'activo':'false'
		}
	]
});