const inputTeg = document.querySelector('input');
const inputEl = document.querySelector("#validation-input")

inputEl.addEventListener("change", (event) => {
      const inputText = event.target.value;
      if (inputText.length === +inputTeg.getAttribute('data-length')) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
      } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
      };
    });
    




    