/// <reference path="../typings/angularjs/angular.d.ts" />

import * as angular from 'angular';

(function(app:angular.IModule) {

	app.controller('exampleController', ['$scope', function($scope) {
		var vm = this;
		vm.bootstrapSuccessful = true;
	}]);

})(angular.module('TypeScriptUMDExample', []));