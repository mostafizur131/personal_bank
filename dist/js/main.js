//Login System
const submitHandler = document.getElementById("submit");
const users = [
  {
    email: "tahsin.mostafiz131@gmail.com",
    password: "tahsin131@@@",
  },
  { email: "mostafiz131@gmail.com", password: "tahsin131@@@" },
];
function authenticateUser(email, pass) {
  return users.find((user) => user.email === email && user.password === pass);
}
submitHandler.addEventListener("click", function () {
  const email = document.getElementById("userEmail").value;
  const pass = document.getElementById("userPassword").value;
  const authenticatedUser = authenticateUser(email, pass);
  if (authenticatedUser) {
    alert("Log In Successful");
    window.location.href = "account.html";
  } else {
    alert("Invalid Credential");
  }
});
