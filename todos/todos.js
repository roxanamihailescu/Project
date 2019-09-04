console.log("Salut Alex")
// // body{
//   email: String
//   password String
// }

const email = document.getElementById("email").value
const password = document.getElementById("password").value
const form = document.querySelector("form")
form.addEventListener("submit". function login(e) {
fetch("http://localhost:3000/api/auth/login", {
  method: "POST",
  data: JSON.stringify({
    email: form.email.value,
    password: form.password.value
  })
})
.then(r => r.json())
.then(response => {
  localStorage.setItem("token", response.token)
  location assign("./index.html")
})

///sessionStorage.setItem("token", response.token)//