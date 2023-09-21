function sendSpaceship(spaceship:{pilot: string, copilot?: string }){
    ///...
}

sendSpaceship({pilot: 'Han Solo', copilot: 'Chewbacca'}),

sendSpaceship({pilot: 'Han Solo'})
// Adicionamos o "?" depois do copilot para informar que
// este parâmetro é opcional



// Outra forma de evitar a tipagem é o unknow
let input: unknown

input = 'test'
input = 10
input = true
input = 0.652
input = []


let text: string

// text = input  
// isso dará erro porque o tipo unknow não pode ser atribuído a uma variável com tipo estabelecido


// Imagine que queremos que nenhuma verificação seja feita
// usamos o any
let arr: any
// Essa é a forma mais radical de todas pois com ela o TypeScript 
// para de funcionar no seu código. MUITO CUIDADO!
arr = 'test'
arr = 10
arr = true
arr = 0.652
arr = []

// Um último tipo que vale a pena ressaltar: never
// ele não é exatamente uma forma de evitar a tipagem mas 
// funciona de forma parecida
function verificacao(test: boolean){
    if(test){

    } else{
        let _check: never

        //return _check
    }

}

// Iremos mais consumir do que propriamente fazer códigos com esse tipo
// Quando ele aparece significa que seu código caiu em um estado
// que nunca deveria existir.



