"use strict";

app.controller( 'homeCtrl', function( $scope ){
	var imagepath = 'assets/img/';
	$scope.data = {
		dashboard: [
			{
				'url': 'usuarios',
				'desc': 'Listado de usuarios activos y no activos.',
				'title': 'Usuarios',
				'img': imagepath + 'perfil.jpg'
			},
			{
				'url': 'roles',
				'desc': 'Roles de cada usuario.',
				'title': 'Roles',
				'img': imagepath + 'role.jpg'
			},
			{
				'url': 'clases',
				'desc': 'Las clases obtenidas clases.',
				'title': 'Clases',
				'img': imagepath + 'clases.png'
			},
			{
				'url': 'horas',
				'desc': 'Horarios disponibles de Unitec.',
				'title': 'Horas',
				'img': imagepath + 'horas.jpg'
			},
			{
				'url': 'secciones',
				'desc': 'Las secciones con toda su informacion.',
				'title': 'Secciones',
				'img': imagepath + 'secciones.jpg'
			}
		]
	}
} );