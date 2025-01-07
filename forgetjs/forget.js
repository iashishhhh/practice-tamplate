document.getElementById('forgotPasswordForm').addEventListener('submit', function (event) {
  event.preventDefault()
  
  // Clear previous errors
  clearErrors()

  const emailInput = document.getElementById('email')
  const email = emailInput.value.trim()
  let isValid = true

  // Custom validation for email
  if (email === '') {
    emailInput.classList.add('invalid')  // Add red border for invalid input
    isValid = false
  } else if (!validateEmail(email)) {
    emailInput.classList.add('invalid')  // Add red border for invalid input
    isValid = false
  }

  if (isValid) {
    // Retrieve user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('userData'))

    if (storedUserData && storedUserData.email === email) {
      alert('Password reset link has been sent to your email address!')
      console.log(`Password reset link sent to: ${email}`)
      window.location.href = 'resetPassword.html'
    } else {
      alert('Email not found in our records!')
    }
  }
})

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function clearErrors() {
  const emailInput = document.getElementById('email')
  emailInput.classList.remove('invalid')  // Remove red border when clearing errors
}
