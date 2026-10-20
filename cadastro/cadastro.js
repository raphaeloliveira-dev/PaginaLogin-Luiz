const form = document.querySelector("#signup-form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const message = document.querySelector("#form-message");

function validatePasswordMatch() {
	if (confirmPassword.value && password.value !== confirmPassword.value) {
		confirmPassword.setCustomValidity("As senhas precisam ser iguais.");
	} else {
		confirmPassword.setCustomValidity("");
	}
}

password.addEventListener("input", validatePasswordMatch);
confirmPassword.addEventListener("input", validatePasswordMatch);

form.addEventListener("submit", (event) => {
	event.preventDefault();
	validatePasswordMatch();

	if (!form.reportValidity()) {
		message.textContent = "Confira os campos destacados.";
		return;
	}

	message.textContent = "Dados validados. A conta ainda não foi salva porque este projeto não tem um servidor conectado.";
});
