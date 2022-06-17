let searchButton = document.querySelector("#buscar-paciente");

searchButton.addEventListener("click", function(){
    let requestApi = new XMLHttpRequest();

    requestApi.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    requestApi.send();

    requestApi.addEventListener("load", function(){
        let result = requestApi.responseText;
        const list = JSON.parse(result);

        for (let i = 0; list.length; ++i){
            let tbTable = document.querySelector("#tabela-pacientes");
            let newRow  = createTr(list[i]);

            tbTable.appendChild(newRow);
        }
    });

    searchButton.classList.add("fadeOut");
});
