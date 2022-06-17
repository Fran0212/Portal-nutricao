let adiciona = document.querySelector("#adicionar-paciente");

adiciona.addEventListener("click", eventFunction);

function eventFunction(event) {
    event.preventDefault();
    let form = adicionaPaciente();
    form.reset();
}

function adicionaPaciente() {
    let form = document.querySelector("#form-adiciona");
    let tbTable = document.querySelector("#tabela-pacientes");
    clearStyle(form);

    const objPaciente = formatData(form);

    let trPaciente = createTr(objPaciente);

    if (!setValidadtion(trPaciente)) 
        return form;

    tbTable.appendChild(trPaciente);

    return form;
}

function formatData(form) {
    let wght = form.peso.value;
    let hght = form.altura.value;
    let name = form.nome.value;
    let fat = form.peso.value;

    let validWght = isValidWeight(wght);
    let validHght = isValidHeight(hght);

    return {
        nome: name.length != 0 ? name : form.nome.classList.add("campo-invalido"),
        peso: validWght ? wght : form.peso.classList.add("campo-invalido"),
        altura: validHght ? hght : form.altura.classList.add("campo-invalido"),
        gordura: fat.length > 0 ? fat : form.gordura.classList.add("campo-invalido"),
        imc: (validHght && validWght) ? imcCalc(hght, wght) : ""
    };
}

function createTr(pacienteObject) {
    let trReturn = document.createElement("tr");

    trReturn.classList.add("paciente");

    let tdNome = createTd(pacienteObject.nome, "info-nome");
    let tdPeso = createTd(pacienteObject.peso, "info-peso");
    let tdAltura = createTd(pacienteObject.altura, "info-altura");
    let tdGordura = createTd(pacienteObject.gordura, "info-gordura");
    let tdImc = createTd(pacienteObject.imc, "info-imc");

    let tdList = [ tdNome, tdPeso, tdAltura, tdGordura, tdImc ];

    appendToTr(tdList, trReturn);

    return trReturn;
}

function createTd(name, tdClass) {
    let td = document.createElement("td");
    td.classList.add(tdClass);
    td.textContent = name;

    return td;
}

function appendToTr(tdList, tr){
    for (let i = 0; i < tdList.length; ++i)
        tr.appendChild(tdList[i]);
}

function clearStyle(form) {
    let styleList = form.querySelectorAll(".campo-invalido");

    styleList.forEach(function(element) {
        element.classList.remove("campo-invalido");
    });
}
