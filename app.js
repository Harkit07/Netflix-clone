let btns = document.querySelectorAll(".icon");

for(btn of btns) {
    btn.addEventListener("click", function(event) {
        event.stopPropagation();
        let about = this.parentNode;
        let div = about.nextElementSibling;
        div.classList.toggle("hide");
        this.classList.toggle("rotate");
    });
}