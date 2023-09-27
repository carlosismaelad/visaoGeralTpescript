/*
Decorators são um tipo especial de declaração no TS que podem
ser anexados a uma classe, método, propriedade ou parâmetros.
Basicamente eles servem para adicionar informações e procedimentos
extras sobre a declaração que estamos "decorando". É como se estivéssemos
adicionando funcionalidades extras aonde adicionamos o decorator.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// vamos criar uma função que será nosso decorator
function Decorator() {
    return function (target, key, descriptor) {
        descriptor.value = function (value) {
            console.log(`Calculando ${value} elevado ao quadrado`); // alterando o comportamento da função calculate
            return Math.pow(value, 2);
        };
    };
}
// Criamos uma classe fictícia meio sem sentido apenas para teste
class Planet {
    constructor(name) {
        this.name = name;
    }
    calculate(value) {
        //...
        console.log(`Calculando ${value} vezes dois`);
        return value * 2;
    }
}
__decorate([
    Decorator() // sintaxe -> Passamos o @NomeDoDecorator e chamamos ele como uma função / Preciso habilitar o recurso experimental do compilador
], Planet.prototype, "calculate", null);
const planet = new Planet('Terra');
const result = planet.calculate(2);
console.log(`Resultado = ${result}`);
// Retornou "Calculando 2 elevado ao quadrado" | "Resultado = 4"
// Então substituímos completamente o comportamento do nosso método acrescentando esse decorator
// Normalmente consumimos Decorators, não implementamos nossos Decorators.
