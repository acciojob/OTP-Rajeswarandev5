const codes = document.querySelectorAll(".code");

codes.forEach((input, index) => {

  // Move focus forward after entering a number
  input.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");

    if (this.value !== "" && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });


  // Backspace handling
  input.addEventListener("keydown", function (event) {

    if (event.key !== "Backspace") {
      return;
    }

    // Always prevent the browser's default Backspace behavior
    event.preventDefault();

    // If current field has a value, delete ONLY the current value
    if (this.value !== "") {
      this.value = "";
      return;
    }

    // If current field is empty, move focus to previous field
    // Do NOT clear the previous field
    if (index > 0) {
      codes[index - 1].focus();
    }
  });
});


// Focus the first input initially
codes[0].focus();