
function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)))
}

const preco = 100;
const formaDePagamento = 1;

if (formaDePagamento == 1) {
    console.log(aplicarDesconto(preco, 10));
}

else if (formaDePagamento == 2) {
    console.log(aplicarDesconto(preco, 15));
}

else if (formaDePagamento == 3) {
    console.log(preco);
}

else {

}














/*function meuNome(nome) {
    console.log("Meu nome é " + nome);
}

meuNome('Leticia');

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log("Maior de idade")
    }

    else {
        console.log("Menor de idade")
    }
}

verificarIdade(28); */