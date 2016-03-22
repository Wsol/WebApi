"use strict";

app.controller( 'homeCtrl', function( $scope ){
	var imagepath = 'assets/img/';
	$scope.data = {
		dashboard: [
			{
				'url': 'clases',
				'desc': 'Listado de clases',
				'title': 'Clases',
				'img': imagepath + 'clases.jpg'
			},
			{
				'url': 'perfil?user=1',
				'desc': 'Perfil de Personas.',
				'title': 'Perfil',
				'img': imagepath + 'perfil.jpg'
			}
		]
	}
} );