const codes = document.querySelectorAll(".code");

codes.forEach((input, index) => {

  // Move to next input after entering a number
  input.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");

    if (this.value !== "" && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });


  // Backspace behavior
  input.addEventListener("keydown", function (event) {

    if (event.key !== "Backspace") {
      return;
    }

    // Prevent browser default behavior
    event.preventDefault();

    // Case 1: Current field has a value
    // Delete the current value only
    if (this.value !== "") {
      this.value = "";
      return;
    }

    // Case 2: Current field is empty
    if (index > 0) {

      const previousInput = codes[index - 1];

      // Move to previous field
      previousInput.focus();

      // Delete the previous field's value
      if (previousInput.value !== "") {
        previousInput.value = "";
      }
    }
  });
});


// Initial focus
codes[0].focus();