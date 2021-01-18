function soma(n1,n2){
    return n1 + n2;
}

function setReplace (frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

var validar; // GLOBAL
function validaIdade(idade){
    validar;
    if(idade >=18){
        validar = true;
    }else {
        validar = false
    }

    return validar;
}

console.log(soma(5,10))
console.log(setReplace("Vai Japao", "Japao", "Brasil"));

console.log(validaIdade(18));
