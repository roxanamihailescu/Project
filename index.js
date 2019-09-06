import "./styles.css";

var a = document.getElementById("button");
a.addEventListener("click", user);
function user(e) {
  const c = document.getElementById("field");
  const d = document.getElementById("username");
  const e1 = document.getElementById("email");
  const f = document.getElementById("firstName");
  const g = document.getElementById("lastname");
  const h = document.getElementById("phone");
  if (d.value === "") {
    const usr = document.createElement("p");
    usr.textContent = "Please enter a username";
    c.insertBefore(usr, d);
  }
  if (e1.value === "") {
    const eml = document.createElement("p");
    eml.textContent = "Please enter a valid email";
    c.insertBefore(eml, e1);
  }
  if (f.value === "") {
    const fn = document.createElement("p");
    fn.textContent = "Please enter a first name";
    c.insertBefore(fn, f);
  }
  if (g.value === "") {
    const ln = document.createElement("p");
    ln.textContent = "Please enter a last name";
    c.insertBefore(ln, g);
  }
  if (h.value === "") {
    const ph = document.createElement("p");
    ph.textContent = "Please enter a phone number";
    c.insertBefore(ph, h);
  }

  a.removeEventListener("click", user);
}
