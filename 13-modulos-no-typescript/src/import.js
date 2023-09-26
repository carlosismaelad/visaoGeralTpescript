"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ld = require("lodash");
var xwing = {
    name: "X-wing",
    pilot: "Luke Skywalker",
    speed: 200,
    weapons: 5
};
// importanto biblioteca de terceiros (vamos trabalhar com a lodeshs). Já instalamos nesse nosso projeto.
console.log(ld.camelCase(xwing.pilot)); // convertendo o nome do piloto para camelCase com o lodash
console.log(ld.kebabCase(xwing.pilot)); // convertendo o nome do piloto para camelCase com o lodash
console.log(ld.snakeCase(xwing.pilot)); // convertendo o nome do piloto para camelCase com o lodash
