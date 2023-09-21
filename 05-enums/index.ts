/* 
- Os Enums são tipos extras que conseguimos utilizar no TypeScript mas que não
estão disponíveis no JavaScript por padrão.
- Os Enums funcionam de forma simples e são comuns e muito utilizados em outras linguagens como C#, por exemplo.
- \São um conjunto de constantes para os quais podemos atribuir nomes e que vão nos ajudar a trabalhar com 
nosso código com esse valores sendo referenciados mais facilmente.
*/

enum Planets{
    MERCURIO,
    VENUS = 2, // podemos implementar a ordem manualmente
    TERRA, // e o TypeScript irá inferir a ordem dos posteriores incrementando em +1
    MARTE // se não editarmos a ordem eles sempre começam em 0
    // passando o mouse sobre VENUS e TERRA veremos que eles são 3 e 4 respectivamente
}

Planets.TERRA


enum Roles{
    ADMIN = 'admin', // Também podemos armazenar strings neles
    USER = 'user'
}

