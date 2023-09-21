const modalDisplay = document.querySelector(".modal-display");
const textWarning = document.querySelector(".text-warning");
const modalBtn = document.getElementById("btn-modal");
const cardSignUp = document.getElementById("sign_up");
const form = document.getElementById("form");
const inputEmail = document.getElementById("email");

const colors = {
  dangerColor: "hsl(4, 100%, 67%)",
  defaultColor: "hsl(231, 7%, 60%)",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateInput();
  form.reset();
});

function validateInput() {
  const value = inputEmail.value.trim();

  if (!emailPattern.test(value)) {
    textWarning.style.display = "block";
    inputEmail.style.borderColor = colors.dangerColor;
    inputEmail.style.color = colors.dangerColor;
  } else if (emailPattern.test(value)) {
    textWarning.style.display = "none";
    inputEmail.style.borderColor = colors.defaultColor;
    inputEmail.style.color = colors.defaultColor;
    cardSignUp.style.display = "none";
    modalDisplay.style.display = "block";
  }
}

modalBtn.addEventListener("click", () => {
  modalDisplay.style.display = "none";
});
