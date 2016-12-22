//Define the phoneCat module
var phonecatApp = angular.module( 'phonecatApp', []);

//Define a phonelist controller
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
	$scope.phones = [
		{
			name: 'Nexus S',
			snippet: 'Fast just got faster with Nexus S'
		},
		{
			name: 'Motorola XOOM with Wi-Fi',
			snippet: 'Hey my phone has Wi-Fi'
		},
		{
			name: 'Samsung S7',
			snippet: 'Back with a bang'
		}
	];
});