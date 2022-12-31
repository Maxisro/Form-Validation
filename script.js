const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
	// Using Contraint API
	isValid = form.checkValidity();
	//Style main message for an error
	if (!isValid)
}

function processFormData(e) {
	e.preventDefault();
	// Vakidate Form
	validateForm();
}

// Event Listeners
form.addEventListener("submit", processFormData);
