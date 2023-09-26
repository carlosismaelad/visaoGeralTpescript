import { Spaceship } from "./export";
import * as ld from "lodash"; 
// esses três pontinhos são uma mensagem de alerta
// o lodesh foi desenvolvido em JS e não possui tipo nenhum 
// nessa biblioteca e com isso o TS não consegue saber quais são os tipos.
// o próprio VsCode nos traz a sugestão de instalar o @types/lodash com
// o comando npm install --save-dev @types/lodesh

interface BettleSpaceShip extends Spaceship {
    weapons: number
}

let xwing: BettleSpaceShip = {
    name: "X-wing",
    pilot: "Luke Skywalker",
    speed: 200,
    weapons: 5
}

// importanto biblioteca de terceiros (vamos trabalhar com a lodeshs). Já instalamos nesse nosso projeto.
console.log(ld.camelCase(xwing.pilot)) // convertendo o nome do piloto para camelCase com o lodash
console.log(ld.kebabCase(xwing.pilot)) // convertendo o nome do piloto para camelCase com o lodash
console.log(ld.snakeCase(xwing.pilot)) // convertendo o nome do piloto para camelCase com o lodash
