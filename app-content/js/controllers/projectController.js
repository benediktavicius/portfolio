app.controller('projectController', ['$scope', function($scope) { 
	$scope.projects = [ 
	{ 
		name: 'Beat Space',  
		logo: 'app-content/images/beat_space.png',
		description: 'Music Player Web App',
		tools: 'PHOTOSHOP | ANGULAR.JS | SASS | BOOTSTRAP'
	},
	{ 
		name: 'Lamija',  
		logo: 'app-content/images/angular.png',
		description: 'Fashion Gallery and Blog',
		tools: 'PHOTOSHOP | ANGULAR.JS | SASS | BOOTSTRAP'
	},
	{ 
		name: 'Your project',  
		logo: 'app-content/images/ps.jpg',
		description: 'Blah blah u wot m8?',
		tools: 'PHOTOSHOP | ANGULAR.JS | SASS | BOOTSTRAP'
	}
	];
}]);