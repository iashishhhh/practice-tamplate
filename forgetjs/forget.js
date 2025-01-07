document.getElementById('forgotPasswordForm').addEventListener('submit', function (event) {
  event.preventDefault()
  // Clear previous errors
  clearErrors()

  const email = document.getElementById('email').value.trim()

  let isValid = true

  // Custom validation for email
  if (email === '') {
    alert('Email is required!')
    isValid = false
  } else if (!validateEmail(email)) {
    alert('Please enter a valid email address.')
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

function validateEmail (email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function clearErrors () {
}
