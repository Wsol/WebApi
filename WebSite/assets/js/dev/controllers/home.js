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
				'url': 'test',
				'desc': 'test',
				'title': 'Test',
				'img': imagepath + 'test.jpg'
			}
		]
	}
} );