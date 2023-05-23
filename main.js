const rating = document.querySelector(".rating-state");
const btns = document.querySelectorAll(".btn");
const submitButton = document.querySelector(".submit");
const thankYouState = document.querySelector(".submit-state");
const choiceNumber = document.getElementById("number");

submitButton.addEventListener("click", () => {
  thankYouState.classList.add("show");
  rating.classList.add("hidden");
});

btns.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonNumber = button.textContent;
    choiceNumber.textContent = `${buttonNumber}`;
  });
});
