import 'reflect-metadata';

import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'app',
  templateUrl: './src/app.html',
})
export class AppCmp {
	bootstrapSuccessful: boolean;
	constructor() {
		this.bootstrapSuccessful = true;
	}
}

bootstrap(AppCmp, []);
