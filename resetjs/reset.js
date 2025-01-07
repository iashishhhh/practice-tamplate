// Handle the form submission
document.getElementById('passwordResetForm').addEventListener('submit', function (event) {
  event.preventDefault() // Prevent the default form submission

  // Clear all previous error messages
  clearErrors()

  // Collect input values
  const email = document.getElementById('email').value.trim()
  const newPassword = document.getElementById('password').value.trim()
  const confirmNewPassword = document.getElementById('confirmPassword').value.trim()

  let isValid = true

  // Email validation
  if (email === '') {
    showError('emailError', 'Email is required.')
    isValid = false
  } else if (!validateEmail(email)) {
    showError('emailError', 'Please enter a valid email address.')
    isValid = false
  }

  // Password validation
  if (newPassword === '') {
    showError('passwordError', 'New password is required.')
    isValid = false
  } else if (!validatePassword(newPassword)) {
    showError(
      'passwordError',
      'Password must be at least 8 characters long and contain uppercase, lowercase, digit, and special character.'
    )
    isValid = false
  }

  // Confirm password validation
  if (confirmNewPassword === '') {
    showError('confirmPasswordError', 'Please confirm your new password.')
    isValid = false
  } else if (newPassword !== confirmNewPassword) {
    showError('confirmPasswordError', 'Passwords do not match.')
    isValid = false
  }

  if (isValid) {
    // Retrieve data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('userData'))

    // Check if email matches
    if (storedUserData && storedUserData.email === email) {
      // Update the password
      storedUserData.password = newPassword

      // Save updated data to localStorage
      localStorage.setItem('userData', JSON.stringify(storedUserData))

      alert('Password successfully updated.')

      // Redirect to a success page (for example, dashboard.html)
      window.location.href = 'login.html'  // Change 'dashboard.html' to your desired page

      // Reset the form (not necessary if you redirect before this)
      document.getElementById('passwordResetForm').reset()
    } else {
      // Email not found
      showError('emailError', 'Email not found. Please provide a registered email.')
    }
  }
})

// Helper function to validate email
function validateEmail (email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Helper function to validate password
function validatePassword (password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  return passwordRegex.test(password)
}

// Helper function to show error messages
function showError (elementId, message) {
  document.getElementById(elementId).innerText = message
}

// Helper function to clear all errors
function clearErrors () {
  document.querySelectorAll('.text-danger').forEach(errorElement => {
    errorElement.innerText = ''
  })
}
