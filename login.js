let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("form-login");

let user = JSON.parse(localStorage.getItem("user"));
console.log(user);

form.addEventListener("submit", function (event) {
    // Ngan chan hanh vi mac dinh cua form
    event.preventDefault();

    let emailValue = form.email.value.trim();
    let passwordValue = form.password.value.trim();

    if (emailValue === user.email && passwordValue === user.password) {
        alert("Thong tin dang nhap chinh xac!")
        location.href = "index.html";
    } else {
        alert("Thong tin dang nhap khong chinh xac!");
    }
})