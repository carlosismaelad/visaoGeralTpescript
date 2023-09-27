/* 
Generics são recursos que permitem, no TypeScript, que passemos
argumentos para uma função ou classe que são tipos.
Isso é muito útil quando o nosso tipo de entrada (da função) vai ser relevante dentro da função, pois isso vai influenciar no comportamento dela
*/

// função convencional
// function first(array){
//     return array[0]
// }

// função com um tipo Generic que retorna o tipo repassado ou undefined
// ArrayType é basicamente um nome, como se fosse um nome de um argumento.
// Poderíamos dar qualquer nome.
// function last<ArrayType>(array: ArrayType[]): ArrayType | undefined {
//     return array[array.length -1]
// }


// Visualizando as diferenças no retorno
// const pilots = ['Luke', 'Biggs', 'Wedge', 'Han','Lando']

// passando o mouse vemos que o retorno é any
// const firstPilot = first(pilots)

// passando o mouse vemos que o retorno é string
// se alteramos o array para elementos do tipo number a função identificaria autormaticamente
// const lastPilot = last(pilots)

// Trabalhando com um exemplo um pouco mais elaborado
interface Ship {
    name: string
    pilot: string
}

interface Fighter extends Ship {
    weapons: number
    shields: number
}

interface Transport extends Ship {
    capacity: number
}

interface Speeder extends Ship {
    speed: number
    acceleration: number
}


function cloneShip<ShipType extends Ship>(ship: ShipType, newName: string, newPilot: string) {
    const newShip = ship
    newShip.name = newName
    newShip.pilot = newPilot
    return newShip
}

const falcon: Ship = {
    name: 'Millenium Falcon',
    pilot: 'Han'
}

const xWing: Fighter = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
}

// A cópia funciona, porém a tipagem está incorreta
// pois a ambas é atribuido o tipo Ship
const copy1 = cloneShip(falcon, 'Milano', 'Peter')
const copy2 = cloneShip(xWing, 'Black One', 'Poe')


interface EnemyShip {
    name: string,
    pilot: string,
    flag?: string
}

// O tipo Ship não estaria correto aqui
const enemyCopy = cloneShip(falcon, 'Enemy', 'Enemy' ) // o tipo clonado é 'Ship'

// Mas podemos explicitamente passar o tipo para a fubnção
// e agora temos o tipo EnemyShip  atribuído corretamente
const enemyCopy2 = cloneShip<EnemyShip>(falcon, 'Enemy', 'Enemy')

// Aqui temos um erro por conta do tipo EnemyShip
// enemyCopy.flag = 'Imperial' // prop flag não existe no tipo 'Ship'

// Já aqui temos a propriedade opcional flag
enemyCopy2.flag = 'Imeperial'