//Imprimir N�meros at� o Usu�rio Parar(While Loop)
// Escreva um programa que pede n�meros ao usu�rio e imprime, repetidamente, at� que o usu�rio
// insira um n�mero negativo

function programaWhileNumero() {
    let numero = 0;

    while (numero >= 0) {
        numero = parseInt(prompt("Digite um numero (insira um numero negativo para parar):"));

        if (numero >= 0) {
            console.log('seu numero: ', numero)
        } else {
            console.log("Numero negativo inserido, programa encerrando...")
        }
    }
}

programaWhileNumero();