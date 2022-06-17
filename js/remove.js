let letTable = document.querySelector("tbody");

letTable.addEventListener("dblclick", function(event) {
    let target = event.target;
    let parent = target.parentNode;
    parent.classList.add("fadeOut");

    setTimeout(function(){
        parent.remove();
    }, 500);
});
