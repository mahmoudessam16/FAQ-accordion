let questions = document.querySelectorAll(".head");

questions.forEach(ques => {
    ques.addEventListener("click", function () {
        this.nextElementSibling.classList.toggle("showAnswer");
        if (this.nextElementSibling.classList.contains("showAnswer")) {
            this.lastElementChild.src = "http://127.0.0.1:5500/assets/images/icon-minus.svg";
        } else {
            this.lastElementChild.src = "http://127.0.0.1:5500/assets/images/icon-plus.svg";
        }
    })
});
