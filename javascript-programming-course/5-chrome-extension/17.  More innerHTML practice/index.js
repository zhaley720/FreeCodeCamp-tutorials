
const container = document.getElementById("container")

container.innerHTML = "<button id=\"buy-btn\">Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

const button = document.getElementById("buy-btn");

button.addEventListener("click", () => container.innerHTML += "<p>Thank you for buying!</p>");