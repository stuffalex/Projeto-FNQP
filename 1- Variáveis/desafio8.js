//Use o operador tern�rio para definir uma vari�vel baseada em uma condi��o.

let idade = 7;
let nome = 'Maria'
let ehDeMaior = idade >= 18;

let resultado = ehDeMaior ? nome + ' eh de Maior' : nome + ' eh de menor';

console.log(`a idade de ${nome} eh ${idade}, entao `, resultado)