let formState = {
  isValid: true,
  fields: {
    username: true,
    password: true,
    confirmPw: true
  }
};
let form = document.querySelector("form");
let userName = document.getElementById("userName");
let password = document.getElementById("passWord");
let confirmPass = document.getElementById("confirmPass");
let errorMsg = document.getElementById("error");

function isRequired(value) {
  return value !== undefined && value !== "";
}

function hasMinCharacters(numOfCharacters) {
  return function minLengthValidator(value) {
    return value.length >= numOfCharacters;
  };
}
const hasMinLength4 = hasMinCharacters(4);

function hasValidPw(value) {
  var pwRegEx = new RegExp("/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{0,}");
  return pwRegEx.test(value);
}
function hasConfirmedPassword(value, passwordValue) {
  return value === passwordValue;
}
function onChange() {
  const isConfirmed =
    isRequired(confirmPass.value) &&
    hasConfirmedPassword(confirmPass.value, password.value);
  const isPwValid = isRequired(password.value) && hasValidPw(password.value);
  const isUserNameValid = isRequired(userName.value) && hasMinLength4(userName);
  form.fields.username = isUserNameValid;
  form.fields.password = isPwValid;
  form.fields.confirmPw = isConfirmed;
  form.isValid = isUserNameValid && isPwValid && isConfirmed;
}
form.addEventListener("keyup", onChange);


//sau

// const form = document.querySelector("form");

// const isEmpty = value => !value || value === "";
// const minLength = (min, value) => value.length >= min;
// const hasValidPassword = value => {
//   const regex = new RegExp("(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{0,}");
//   return regex.test(value);
// };

// function onChange(e) {
//   const { username, password, cPassword } = form;

//   if (e.target === username) {
//     if (isEmpty(username.value)) {
//       username.nextElementSibling.textContent = "required";
//     } else if (!minLength(4, username.value)) {
//       username.nextElementSibling.textContent = "min length 4";
//     } else {
//       username.nextElementSibling.textContent = "";
//     }
//   }

//   if (e.target === password) {
//     if (isEmpty(password.value)) {
//       password.nextElementSibling.textContent = "required";
//     } else if (!hasValidPassword(password.value)) {
//       password.nextElementSibling.textContent =
//         "Must have at least one uppercase, one lowercase and one number";
//     } else {
//       password.nextElementSibling.textContent = "";
//     }
//   }

//   if (e.target === cPassword) {
//     if (isEmpty(cPassword.value)) {
//       cPassword.nextElementSibling.textContent = "required";
//     } else if (cPassword.value !== form.password.value) {
//       cPassword.nextElementSibling.textContent = "Password no match";
//     } else {
//       cPassword.nextElementSibling.textContent = "";
//     }
//   }
// }

// form.addEventListener("change", onChange);//

