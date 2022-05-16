const novaTarefa = document.querySelector("[data-form-button]")

const input = document.querySelector("[data-form-input]")

novaTarefa.addEventListener("click", () => {
    console.log(input.value)
})