let inputBox = document.querySelector("#input-box");

inputBox.addEventListener("input", function() {
    const inputValue = this.value;
    const names = document.querySelectorAll(".info-nome");

    const subStr = new RegExp(inputValue, "i");

    for (let i = 0; i < names.length; ++i) {
        let element = names[i].parentNode;
        if (!subStr.test(element.textContent))
            element.classList.add("filterDesapear");
        else
            element.classList.remove("filterDesapear");
    }
});
