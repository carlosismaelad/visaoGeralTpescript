// tipos para objetos com type
// type Planet = {
//     name: string,
//     satellite: string[]
// }
let sun;
sun.name = "Sol"; // name vem de Star
sun.mass = 1.989 * (Math.pow(10, 30));
sun.age = 4.603 * (Math.pow(10, 9)); // age vem de CelestialBody
sun.planets = [];
let comet;
comet.mass = 2.2 * (Math.pow(10, 14)); // de CelestialBody
comet.name = "Halley"; // de CelestialBody
comet.size = 15 * (8 * 1000); // de Comet
// Usando inteface com classes
class MilkWayPlanet {
    constructor(name, mass, population, satellite) {
        this.name = name;
        this.mass = mass;
        this.population = population;
        this.satellite = []; // adicionado depois de escrevermos um novo tipo na interface Planet mais abaixo
    }
    //Sem o método abaixo nosso código ainda vai acusar erro
    createSatellite(name) {
        //...
    }
}
// Na verdade não estamos sobrescrevendo mas adicionando mais um tipo
// a uma interface já existente
