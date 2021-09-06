const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{hellojs}}");

console.log(template({ hellojs: "hellojs" }));



