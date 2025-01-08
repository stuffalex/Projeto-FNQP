// Dado um array de strings, escreva uma fun��o que conte o n�mero de vezes que cada palavra
// aparece no array e retorne um objeto com os resultados.Por exemplo:
//contarOcorrencias(["banana", "ma��", "banana", "laranja"]);
// // Sa�da: { banana: 2, ma��: 1, laranja: 1
var strings = ["banana", "ma��","melancia", "banana", "laranja", "melancia", "manga"];

function ContarOcorrencias(array) {
    const retorno = {};
    //varrer o array pelo tamanho
    for (let i = 0; i < strings.length; i++) {
        //guardar o item para validar se esta dentro do objeto criado
        let item = strings[i];

        if (retorno[item]) {
            retorno[item] += 1;
        } else {
            retorno[item] = 1;
        }
    }
    return retorno;
};

console.log(ContarOcorrencias(strings));