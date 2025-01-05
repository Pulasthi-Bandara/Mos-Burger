// Array to store valid credentials
const validCredentials = [
    { username: "admin", password: "admin123" },
    { username: "user", password: "user123" },
  ];
  
  // Login button click event
  document.getElementById("loginButton").addEventListener("click", function () {
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Check credentials
    const isValid = validCredentials.some(
      (user) => user.username === username && user.password === password
    );
  
    if (isValid) {
      // Redirect to another page if valid
      window.location.href = "admin.html";
    } else {
      // Show error message if invalid
      alert("Invalid username or password!");
    }
  });
  