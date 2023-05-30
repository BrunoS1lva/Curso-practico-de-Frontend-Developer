let editButton = document.getElementById("edit-button");
let inputPassword = document.getElementById("input-password");
let inputEmail = document.getElementById("input-email");
let inputName = document.getElementById("input-name");

editButton.addEventListener("mouseover", changerValue);

function changerValue() {
    if (inputPassword.value !== '' || inputEmail.value !== '' || inputName.value!=='') {
        editButton.value = 'Save';
        editButton.style.backgroundColor = '#acd9b2';
        editButton.style.color = '#f7f7f7'
    }
}
