let trPaciente = document.querySelectorAll(".paciente");

for (let i = 0; i < trPaciente.length; i++) {
    const element = trPaciente[i];
    imc(element);
}

function imc(paciente) {

    let tdImc = paciente.querySelector(".info-imc");
    let imc;

    let tdHeight = paciente.querySelector(".info-altura");
    let height = tdHeight.textContent;

    let tdWeight = paciente.querySelector(".info-peso");
    let weight = tdWeight.textContent;

    let areValid = validData(height, weight);

    if ( areValid ){
        imc = imcCalc(height, weight);
    } else {
        paciente.classList.add("paciente-invalido");

        if (!areValid[0])
            tdWeight.textContent = "Peso invalido";

        if (!areValid[1])
            tdHeight.textContent = "Altura invalida";

        imc = "Informacoes invalidas";
    }

    tdImc.textContent = imc;
}

function imcCalc(height, weight) {
    return (weight/(height**2)).toFixed(2);
}

