function handelSubmit(event) {
    console.log("clicked")
    field.textContent = "This randomly redirects to the form action URL and randomly doesnt. I cant replicate it consistantly"
    event.preventDefault();
}

const field = document.getElementById('resto')
const form = document.getElementById('form')
form.addEventListener("submit", handelSubmit)