export default function isMaiorIdade(campo){
    const dataNascimento = new Date(campo.value);
    if (!validaIdade(dataNascimento))   {
        campo.setCustomValidity("O usuário não é maior de idade")
    }
}

function validaIdade(data){
    const dataAtual = new Date();
    
    // Data que ele fe 18 anos (por isso soma 18)
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}