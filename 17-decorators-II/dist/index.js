var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Método que retorna os detalhes de todos os métodos chamado e seus parâmetros
function Log() {
    return function (taget, key, descriptor) {
        const originalMethos = descriptor.value;
        descriptor.value = function (...args) {
            console.log('--------------------------------');
            console.log(`Chamando o método ${key} com os parâmetros: ${JSON.stringify(args)}`);
            const result = originalMethos.apply(this, args);
            console.log(`O método ${key} retornou o valor: ${JSON.stringify(result)}`);
            console.log('--------------------------------');
            return result;
        };
    };
}
class Planet {
    constructor(name) {
        this.name = name;
    }
    calculate(value) {
        //...
        console.log(`Calculando ${value} vezes dois`);
        return value * 2;
    }
    invertName() {
        return this.name.split('').reverse().join('');
    }
}
__decorate([
    Log() // sintaxe -> Passamos o @NomeDoDecorator e chamamos ele como uma função / Preciso habilitar o recurso experimental do compilador
], Planet.prototype, "calculate", null);
__decorate([
    Log()
], Planet.prototype, "invertName", null);
const planet = new Planet('Terra');
const result = planet.calculate(2);
console.log(`Resultado = ${result}`);
planet.invertName();
