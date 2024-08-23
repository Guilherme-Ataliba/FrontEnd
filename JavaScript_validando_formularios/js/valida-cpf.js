export default function isCPF(campo){  
    const cpf = campo.value.replace(/\.|-/g, "")   
    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)){
        campo.setCustomValidity("Esse CPF não é válido")
    } 
}

function validaNumerosRepetidos(cpf){
    const num = cpf[0]
    for(let number of cpf){
        if (num != number) {return false}
    }
    return true
}

function validaPrimeiroDigito(cpf){
    let soma = 0;
    let multiplicador = 10;

    for(let i = 0; i < 9; i++){
        soma += cpf[i] * multiplicador
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11){
        soma = 0;
    }

    return soma != cpf[9];
}

function validaSegundoDigito(cpf){
    let soma = 0;
    let multiplicador = 11;

    for(let i = 0; i < 10; i++){
        soma += cpf[i] * multiplicador
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11){
        soma = 0;
    }

    return soma != cpf[10];
}