function validateForm(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Password validation
  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return false;
  }

  // If validation passes, you can submit the form to your backend
  console.log("Form submitted:", { email, password });
  // Add your login API call here
}
