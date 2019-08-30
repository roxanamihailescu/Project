const form = document.getElementById("Login");

form.addEventListener("submit", handleLogin);

function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(r => r.json())
    .then(res => {
      if (res.error) {
        document.getElementById("error-message").innerText = res.error;
      } else {
        console.log(window.location);
        // window.location.assign("/users.html");
      }
    });
}
