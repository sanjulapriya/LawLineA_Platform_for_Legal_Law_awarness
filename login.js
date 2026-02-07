let isLogin = false;

function toggleForm() {
  isLogin = !isLogin;
  document.getElementById("form-title").innerText = isLogin ? "Login" : "Signup";
  document.querySelector("button").innerText = isLogin ? "Login" : "Signup";
  document.querySelector(".toggle-link").innerText = isLogin
    ? "Don't have an account? Signup"
    : "Already have an account? Login";
  document.getElementById("message").innerText = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("continueBtn").style.display = "none";
}

function submitForm() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");
  const continueBtn = document.getElementById("continueBtn");

  if (username === "" || password === "") {
    message.style.color = "red";
    message.innerText = "Please enter both username and password.";
    continueBtn.style.display = "none";
    return;
  }

  if (isLogin) {
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
      message.style.color = "green";
      message.innerText = "Login successful!";
      continueBtn.style.display = "block";
    } else {
      message.style.color = "red";
      message.innerText = "Invalid credentials.";
      continueBtn.style.display = "none";
    }
  } else {
    if (localStorage.getItem(username)) {
      message.style.color = "red";
      message.innerText = "Username already exists!";
    } else {
      localStorage.setItem(username, password);
      message.style.color = "green";
      message.innerText = "Signup successful! Please login.";
      toggleForm();
    }
    continueBtn.style.display = "none";
  }
}

function goToIndex() {
  window.location.href = "index.html";
}