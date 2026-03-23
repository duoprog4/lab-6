function alert_paragraph_control() {
    let r = document.getElementById("border_R").value;
    let g = document.getElementById("border_G").value;
    let b = document.getElementById("border_B").value;
    let width = document.getElementById("border_width").value;
    let background_r = document.getElementById("bg_R").value;
    let background_g = document.getElementById("bg_G").value;
    let background_b = document.getElementById("bg_B").value;
    let paragraph = document.getElementById("paragraph");

    paragraph.style.borderColor = `rgb(${r}, ${g}, ${b})`;
    paragraph.style.borderWidth = `${width}px`;
    paragraph.style.backgroundColor = `rgb(${background_r}, ${background_g}, ${background_b})`;
}
function validate() {
    let password1 = document.getElementById("pass1").value;
    let password2 = document.getElementById("pass2").value;

    if (password1.length < 8) {
        alert("The password must be at least 8 characters long.");
        return;
    }
    if (password1 !== password2) {
        alert("The passwords do not match.");
        return;
    }
    alert("The passwords match");
}