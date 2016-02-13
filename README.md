## jspm-typescript-umd-example

> An example for an AngularJS application written in TypeScript using jspm as UMD (SystemJS) module loader.

I created this repository as an example for [my answer on Stack Overflow](http://stackoverflow.com/a/32024545/1993402).
The intend is to show how really simple and nice TypeScript plays together with UMD modules offered by jspm.


#### Basic environment setup:

At first, make sure you have Node.js and TypeScript installed properly.

```
node -v
npm install -g typescript
```

Then install jspm and typings using npm.

```
npm install -g jspm
npm install -g typings
```

#### Next steps:

```
jspm install angular
```

will fetch the AngularJS sources that can be imported into TypeScript using umd later on.

When first using jspm it will ask for creating a config.js that will hold all information on which transpiler to use etc.
Simply select "typescript" when asked for the transpiler (if you select "none", the below will still work, but you won't be able to compile TypeScript live inside your browser!).

```
typings install angular --save --ambient
```

will install TypeScript definition files for AngularJS (located in /typings),


#### Start coding:

Now let's get our hands dirty with some code:

```
/// <reference path="../typings/browser.d.ts" />

class ExampleController {
	bootstrapSuccessful: boolean;
	constructor() {
		this.bootstrapSuccessful = true;
	}

}
angular.module('TypeScriptUMDExample', [])
	.controller('exampleController', ExampleController);
```

What does this do? It tells TypeScript where to locate the type definition files.

The interesting part for UMD modules is the import statement. It will translated by tsc (the TypeScript compiler) to this:

```
var angular = require('angular');
```

which can be interpreted by SystemJS script inside the browser to load the angular dependency dynamically.

Now, inside our html page, we can simply bootstrap the whole application by adding

```
<script src="jspm_packages/system.js"></script>
<script src="config.js"></script>
<script>
	System.import('dist/app');
</script>
```

It will then fetch the config.js file, that holds information about where the jspm packages are located for SystemJS.
Next, it will import the JavaScript that will be created by the TypeScript compiler and satisfy all the needed dependencies.

That's all. Your AngularJS application written in TypeScript using jspm as UMD module loader.

#### Bonus: Compile your TypeScript files directly inside the browser

You want to use your .ts files directly in the browser? Simply change the line inside your html page from

```
System.import('dist/app');
```

to

```
System.import('src/app');
```

See what happens in the network tab of the developer tools. Now, not only the AngularJS source will be loaded by SystemJS, but also the TypeScript source.
Your application just got compiled live inside your browser. That's really cool for a fast development lifecycle! No more precompiling with grunt, gulp or whatever!


#### License:

MIT
