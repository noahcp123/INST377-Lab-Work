function handelSubmit(event) {
    console.log("clicked")
    field.textContent = "Submitted"
    event.preventDefault();
}

const field = document.getElementById('resto')
const form = document.getElementById('form')
form.addEventListener("submit", handelSubmit)