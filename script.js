//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes.forEach((input, index) => {

  // Move to next input after entering a digit
  input.addEventListener("input", function () {

    // Allow only numbers
    this.value = this.value.replace(/\D/g, "");

    if (this.value !== "" && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });


  // Backspace behavior
  input.addEventListener("keydown", function (event) {

    if (event.key === "Backspace") {

      // If current field contains a digit, delete it
      if (this.value !== "") {
        this.value = "";
        event.preventDefault();
        return;
      }

      // If current field is empty, move to previous field
      if (index > 0) {
        codes[index - 1].focus();
        codes[index - 1].value = "";
      }
    }
  });
});


// Automatically focus the first field
codes[0].focus();