/*
Generics são recursos que permitem, no TypeScript, que passemos
argumentos para uma função ou classe que são tipos.
Isso é muito útil quando o nosso tipo de entrada (da função) vai ser relevante dentro da função, pois isso vai influenciar no comportamento dela
*/
function cloneShip(ship, newName, newPilot) {
    const newShip = ship;
    newShip.name = newName;
    newShip.pilot = newPilot;
    return newShip;
}
const falcon = {
    name: 'Millenium Falcon',
    pilot: 'Han'
};
const xWing = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
};
// A cópia funciona, porém a tipagem está incorreta
// pois a ambas é atribuido o tipo Ship
const copy1 = cloneShip(falcon, 'Milano', 'Peter');
const copy2 = cloneShip(xWing, 'Black One', 'Poe');
// O tipo Ship não estaria correto aqui
const enemyCopy = cloneShip(falcon, 'Enemy', 'Enemy'); // o tipo clonado é 'Ship'
// Mas podemos explicitamente passar o tipo para a fubnção
// e agora temos o tipo EnemyShip  atribuído corretamente
const enemyCopy2 = cloneShip(falcon, 'Enemy', 'Enemy');
// Aqui temos um erro por conta do tipo EnemyShip
// enemyCopy.flag = 'Imperial' // prop flag não existe no tipo 'Ship'
// Já aqui temos a propriedade opcional flag
enemyCopy2.flag = 'Imeperial';
