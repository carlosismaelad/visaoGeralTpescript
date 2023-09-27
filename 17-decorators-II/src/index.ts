// Método que retorna os detalhes de todos os métodos chamado e seus parâmetros
function Log(){
    return function(taget, key, descriptor){
        const originalMethos = descriptor.value
        
        descriptor.value = function(...args: any[]){
            console.log('--------------------------------')
            console.log(`Chamando o método ${key} com os parâmetros: ${JSON.stringify(args)}`)

            const result = originalMethos.apply(this, args)

            console.log(`O método ${key} retornou o valor: ${JSON.stringify(result)}`)
            console.log('--------------------------------')

            return result            
        }
    }
}
    

class Planet {
    name:string

    constructor(name:string){
        this.name = name
    }
    
    @Log() // sintaxe -> Passamos o @NomeDoDecorator e chamamos ele como uma função / Preciso habilitar o recurso experimental do compilador
    calculate(value:number){
        //...
        console.log(`Calculando ${value} vezes dois`)
        return value * 2
    }

    @Log()
    invertName(){
        return this.name.split('').reverse().join('')
    }
}


const planet = new Planet('Terra')

const result = planet.calculate(2)
console.log(`Resultado = ${result}`)

planet.invertName()