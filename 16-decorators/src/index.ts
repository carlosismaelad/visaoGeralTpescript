/* 
Decorators são um tipo especial de declaração no TS que podem
ser anexados a uma classe, método, propriedade ou parâmetros.
Basicamente eles servem para adicionar informações e procedimentos
extras sobre a declaração que estamos "decorando". É como se estivéssemos 
adicionando funcionalidades extras aonde adicionamos o decorator.
*/

// vamos criar uma função que será nosso decorator
function Decorator(){
    return function(target, key, descriptor){
        descriptor.value = function(value: number){
            console.log(`Calculando ${value} elevado ao quadrado`) // alterando o comportamento da função calculate
            return value ** 2
        }
    }
}


// Criamos uma classe fictícia meio sem sentido apenas para teste
class Planet {
    name:string

    constructor(name:string){
        this.name = name
    }
    
    @Decorator() // sintaxe -> Passamos o @NomeDoDecorator e chamamos ele como uma função / Preciso habilitar o recurso experimental do compilador
    calculate(value:number){
        //...
        console.log(`Calculando ${value} vezes dois`)
        return value * 2
    }
}


const planet = new Planet('Terra')

const result = planet.calculate(2)
console.log(`Resultado = ${result}`)

// Retornou "Calculando 2 elevado ao quadrado" | "Resultado = 4"
// Então substituímos completamente o comportamento do nosso método acrescentando esse decorator
// Normalmente consumimos Decorators, não implementamos nossos Decorators.
