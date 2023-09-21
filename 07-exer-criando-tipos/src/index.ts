const spaceships = []

function addSpaceship(name: string, pilot: string, crewLimit: number){

    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    }
    spaceships.push(spaceship)
    alert(`A nave ${spaceship.name} foi registrada.`)
}

function findSpaceship(name:string){
    let spaceship: {
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission: boolean
    }

    spaceship = spaceships.find(ship => ship.name === name)
    return spaceship
}

function addCrewMember(member: string, spaceship:{name: string, crewLimit: number, crew: string[]}){

    if(spaceship.crew.length >= spaceship.crewLimit){
        alert(`${member} não pode ser adicionado à tripulação. Limite atingido.`)
    } else{
        spaceship.crew.push(member)
        alert(`${member} adicionado com sucesso à tripulação da ${spaceship.name}.`)
    }
}

function sendSpaceshipInMission(spaceship: {name: string, crewLimit: number, crew: string[], inMission: boolean}){
    if(spaceship.inMission){
        alert(`Nave ${spaceship.name} já em missão`)

    }else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)){
        alert(`Nave ${spaceship.name} não pode ser enviada. Tripulação abaixo de um terço do limite.`)

    } else {
        spaceship.inMission = true
        alert(`Nave ${spaceship.name} enviada para a missão.`)
    }
}

function firstMenuOption(){
    const name = prompt('Nome da nave a ser registrada: ')
    const pilot = prompt(`Informe o nome do piloto da ${name}: `)
    const crewLimit = Number(prompt(`Quantos tripulantes a ${name} suporta? `))
    const confirmation = confirm(`Confirma o registro da nave ${name}\nPiloto: ${pilot}\nLimite da tripulação: ${crewLimit}\n?`)

    if(confirmation){
        addSpaceship(name, pilot, crewLimit)
    }
}

function secondMenuOption(){
    const member = prompt(`Qual o nome do tripulante? `)
    const spaceshipName = prompt(`Para qual nave ${member} deverá ser designado? `)
    
    const spaceship = findSpaceship(spaceshipName)

    if(spaceship){
        const confirmation = confirm(`Confirma a inclusão de ${member} na tripulação da ${spaceshipName}? `)

        if(confirmation){
            addCrewMember(member, spaceship)
            
        }
    }    
}

function thirdMenuOption(){
    const spaceshipName = prompt('Qual o nome da nave a ser enviada? ')

    const spaceship = findSpaceship(spaceshipName)

    if(spaceship){
        const confirmation = confirm(`Confirma o envio da nave ${spaceship.name}? `)

        if(confirmation){
            sendSpaceshipInMission(spaceship)
        }
    }
}

function fouthMenuOption(){
    let list = 'Naves registradas:\n'

    spaceships.forEach((spaceship:{
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission: boolean
    }) => {
        list += `
        Nave: ${spaceship.name}
        Piloto: ${spaceship.pilot}
        Em missão? ${spaceship.inMission}
        Tamanho max da tripulação: ${spaceship.crewLimit}
        Tripulação: ${spaceship.crew.length}
        `

        spaceship.crew.forEach(member => {
            list += `   - ${member}\n`
        })
    })
    alert(list)
}

let userOption = 0

while(userOption != 5){
    const menu = `
        Painel principal:
        1 - Registrar nova nave
        2 - Adicionar membro a uma tripulação
        3 - Enviar nave em missão
        4 - Listar naves
        5 - Encerrar
    `

    userOption = Number.parseInt(prompt(menu))

    switch(userOption){
        case 1:
            firstMenuOption()
            break
        case 2:
            secondMenuOption()
            break
        case 3:
            thirdMenuOption()
            break
        case 4:
            fouthMenuOption()
            break 
        case 5:
            alert('Encerrando o sistema...')
            break
        default:
            alert('Opção inválida! Retornando ao painel principal.')   
    } 
    
}