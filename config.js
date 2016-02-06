System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  packages: {
    "/src": {
      "defaultExtension": "ts"
    }
  },
  map: {
    "angular": "github:angular/bower-angular@1.5.0",
    "typescript": "npm:typescript@1.8.0"
  }
});
