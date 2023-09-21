let literal: 'Hello world!' // variável do tipo literal
let pi: 3.14159 // outro tipo literal

/* Variáveis do tipo literal são chamadas de "literais" porque elas mantêm o 
valor exato que foi atribuído a elas, sem a necessidade de cálculos ou conversões. */

// Se tentarmos atribuir um valor diferente a um tipo literal, ainda que seja do mesmo tipo de dado,
// não será possível porque o tipo da variável será o próprio valor atribuído

// literal = 'Hi, guys' -> Irá acusar o erro "O tipo '"Hi, guys"' não pode ser atribuído ao tipo '"Hello world!"'""

// Union types - união de tipos
let options: 'Yes' | 'No' //-> essa variável só pode ser do tipo Yes ou (represenado pelo pipe | ) No
options = 'Yes'
options = 'No' // O VsCode já trará essas opções de valores no autocomplete

// Union com tipos diferentes também funciona
let confirmation: number | boolean

confirmation = 1
confirmation = 0
confirmation = true
confirmation = false

// Uma aplicação possível
let dayOfWeek: 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'

dayOfWeek = 'Wednesday' // quando inserimos as aspas vemos todas elas no autocomplete


// Criando nosso Alias para não termos que reescrever tudo sempre
type Planet = 'Mercúrio' | 'Vênus' | 'Terra' | 'Marte' | 'Júpiter' | 'Saturno'| 'Urano' | 'Netuno'

let planet: Planet

let homePlanet: Planet = 'Terra'

function checkPlanet(homePlanet: Planet){
    if(homePlanet ==='Terra')
        console.log('Estamos em casa!')
}

// Declarando tipos para funções
type GreetingCallBack = (name:string) => void // Uma função chamada GreetingCallBack, que recebe uma string name e retorna void (vazio/nada)

function greet(callBackfn: GreetingCallBack){
    let name = 'Carlos'
    callBackfn(name)
}
