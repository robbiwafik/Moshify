const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((element) => 
    element.addEventListener("click", function() {
        this.classList.toggle('collapsible--expanded');
    })
);