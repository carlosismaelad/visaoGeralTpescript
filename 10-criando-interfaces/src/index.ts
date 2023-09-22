// tipos para objetos com type
// type Planet = {
//     name: string,
//     satellite: string[]
// }

// Interfaces são semelhantes ao type só que com recursos a mais;
// Podemos usar interfaces para classes mas usamos
// principalmente para objetos
interface CelestialBody {
    name: string,
    mass: number
}

// Com interface podemos fazer com que uma interface seja herdada
// ou que ela herde de outra interface
// No exemplo abaixo Star herda de CelestialBody
interface Star extends CelestialBody{
    age: number,
    planets: Planet[]
}

interface Planet extends CelestialBody{
    population: number,
    createSatellite: (name: string) => void
}

let sun: Star

sun.name = "Sol" // name vem de Star
sun.mass = 1.989 * (10** 30)
sun.age = 4.603 * (10 ** 9) // age vem de CelestialBody
sun.planets = []


// Podemos fazer um type herdar de uma interface com a
// sintaxe mostrada abaixo
type Comet = CelestialBody & { // a sintaxe não é das mais legíveis
    size: number
}

let comet: Comet
comet.mass = 2.2 * (10 ** 14) // de CelestialBody
comet.name = "Halley" // de CelestialBody
comet.size = 15 * (8*1000) // de Comet


// Usando inteface com classes
class MilkWayPlanet implements Planet{ 
    // herda os atributos de Planet que, por sua vez, herda de CelestialBody
    // Precisamos implementar a interface Planet aqui criando um contrato
    name: string
    mass: number
    population: number
    satellite: string[]

    constructor(name:string, mass:number, population:number, satellite: string[]){
        this.name = name
        this.mass = mass
        this.population = population
        this.satellite = [] // adicionado depois de escrevermos um novo tipo na interface Planet mais abaixo
        
    }

    //Sem o método abaixo nosso código ainda vai acusar erro
    createSatellite(name: string){
        //...
    }

}

// Outro ponto em que as interfaces se diferenciam dos types é que 
// types não podem ser reescritos mas interfaces permitem duplicarmos
interface Planet{
    satellite: string[] // repare que ja escrevemos a interface Planets anteriormente
}
// Na verdade não estamos sobrescrevendo mas adicionando mais um tipo
// a uma interface já existente