//BOTONES DETALLES
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;

    question.classList.toggle("show-text");
  });
});

// Botones detalle jugador
const btns2 = document.querySelectorAll(".question2-btn");

btns2.forEach(function (btn) {
  btn2.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;

    question.classList.toggle("show-text");
  });
});