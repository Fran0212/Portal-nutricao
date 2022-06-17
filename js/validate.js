function validData(height, weight) {
    let validWeight = isValidWeight(weight);
    let validHeight = isValidHeight(height);

    if ( validHeight && validWeight ) {
        return true;
    } else {
        return [
            validWeight, 
            validHeight
        ];
    }
}

function isValidHeight(height) {
    return (height > 0 && height < 3);
}

function isValidWeight(weight) {
    if (weight > 0 && weight < 1000)
        return true;
}


function setValidadtion(trPaciente) {
    let imcValidation = trPaciente.querySelector(".info-imc");

    if (imcValidation.textContent.length == 0){
        alert("Valores invalidos");
        return false;
    }

    return true;
}
