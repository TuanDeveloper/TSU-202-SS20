let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("form-register");

form.addEventListener("submit", function (event) {
    // Ngan chan hanh vi mac dinh cua form
    event.preventDefault();
    // let emailValue = email.value.trim();
    // let passwordValue = password.value.trim();

    let emailValue = form.email.value.trim();
    let passwordValue = form.password.value.trim();
    const newUser = {
        email: emailValue,
        password: passwordValue
    }
    localStorage.setItem("user", JSON.stringify(newUser));
    console.log(newUser);
})

// let userName = "Quoc Tuan 123";
// let age = 30;

// let user = {
//     email: "it.coder.qtuan@gmail.com",
//     password: 123456,
// }

// localStorage.setItem("userName", userName);
// // localStorage.setItem("age", age);
// // Chuyển đổi object thành dữ liệu dạng JSON
// // Sau khi lưu vào Storage thì browser chuyển thành string và lưu
// localStorage.setItem("age", JSON.stringify(age));

// // localStorage.removeItem("userName");
// // Khi lấy về thì đang ở dữ liệu string, phải parse để chuyển thành Object
// let value = JSON.parse(localStorage.getItem("age"));

// console.log(typeof value);
