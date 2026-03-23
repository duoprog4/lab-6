function alert_paragraph_color() {
    const r = Number(document.getElementById("border_R").value);
    const g = Number(document.getElementById("border_G").value);
    const b = Number(document.getElementById("border_B").value);
    const width = Number(document.getElementById("border_width").value);

    const bgR = Number(document.getElementById("bg_R").value);
    const bgG = Number(document.getElementById("bg_G").value);
    const bgB = Number(document.getElementById("bg_B").value);

    const paragraph = document.getElementById("paragraph");

    paragraph.style.borderColor = `rgb(${r}, ${g}, ${b})`;
    paragraph.style.borderWidth = `${width}px`;
    paragraph.style.borderStyle = "solid";
    paragraph.style.backgroundColor = `rgb(${bgR}, ${bgG}, ${bgB})`;
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