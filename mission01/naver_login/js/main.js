user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

const id = document.querySelector("#userEmail");
const pw = document.querySelector("#userPassword");
const submitButton = document.querySelector("#submitButton");

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function validateInput(inputElement, validatorFunc, className) {
  inputElement.addEventListener("input", function () {
    const inputText = inputElement.value;

    if (validatorFunc(inputText)) {
      inputElement.classList.add(className);
    } else {
      inputElement.classList.remove(className);
    }
  });
}

validateInput(id, emailReg, "properId");
validateInput(pw, pwReg, "properPw");

function loginWell() {
  if (
    id.classList.contains("properId") &&
    pw.classList.contains("properPw") &&
    id.value == "asd@naver.com" &&
    pw.value == "spdlqj123!@"
  )
  window.location.href = "./welcome.html";
}