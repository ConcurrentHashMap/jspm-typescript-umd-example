/// <reference path="../typings/browser.d.ts" />

import * as angular from 'angular';

class ExampleController {
	bootstrapSuccessful: boolean;
	constructor() {
		this.bootstrapSuccessful = true;
	}

}
angular.module('TypeScriptUMDExample', [])
	.controller('exampleController', ExampleController);
