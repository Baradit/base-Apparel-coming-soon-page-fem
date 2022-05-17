const email = document.getElementById("email");
const errorText = document.getElementById("error-text");
const form = document.getElementById("hero__subscribe");
const errorIcon = document.getElementById("error-icon");
const correctIcon = document.getElementById("correct-icon");
const emailPattern =
  /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;

email.addEventListener("blur", (e) => {
  if (email.value.match(emailPattern)) {
    form.classList.add("form-correct");
    form.classList.remove("form-error");
    errorIcon.classList.add("hidden");
    correctIcon.classList.remove("hidden");
    errorText.textContent = "";
  } else {
    e.preventDefault();
    form.classList.remove("form-correct");
    form.classList.add("form-error");
    errorIcon.classList.remove("hidden");
    correctIcon.classList.add("hidden");
    errorText.textContent = "Please provide a valid email.";
  }
});
