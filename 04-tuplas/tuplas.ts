// let crew: [string, string, string] = ['','','']

// crew[0] = 'Carlos'
// crew[1] = 'Leonardo'
// crew[2] = 'Ana'

let point: [number,number, string, boolean]

point = [2,5, 'John', false] 
// se tentarmos adicionar mais item que o especificado na declaração
// da tupla teremos um erro
// podemos ter dados de tipos diferentes na tupla desde que a ordem e a quantidade
// obedeçam o que foi pré-definido

let [x,y] = point
// aqui repassamos os dois primeiros valores de point para x e y
// então o interpretador sabe que são apenas os dois primeiros valores da tupla


