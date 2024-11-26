const acCard = document.querySelectorAll(".card");

acCard.forEach((card) => {
  card.addEventListener("click", () => {
    removeAc();
    card.classList.add("active");
  });
});

function removeAc() {
  acCard.forEach((card) => {
    card.classList.remove("active");
  });
}
