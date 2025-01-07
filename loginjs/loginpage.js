document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault() // Prevent page refresh

  // Collect input values
  const username = document.getElementById('typeUsernameX').value.trim()
  const password = document.getElementById('typePasswordX').value.trim()

  // Clear previous errors
  clearErrors()

  // Retrieve data from localStorage
  const storedUserData = localStorage.getItem('userData')
  if (!storedUserData) {
    showError('usernameError', 'No user data found. Please sign up first!')
    return
  }

  const userData = JSON.parse(storedUserData)

  let isValid = true

  // Validate username (email) and password
  if (username === '') {
    showError('usernameError', 'Username is required!')
    isValid = false
  } else if (username !== userData.email) {
    showError('usernameError', 'Email does not match!')
    isValid = false
  }

  if (password === '') {
    showError('passwordError', 'Password is required!')
    isValid = false
  } else if (password !== userData.password) {
    showError('passwordError', 'Password does not match!')
    isValid = false
  }

  // If all validations pass
  if (isValid) {
    alert('Login successful!')
    window.location.href = 'index.html' // Redirect to homepage or next page
  }
})

// Helper function to show error messages
function showError (elementId, message) {
  const errorElement = document.getElementById(elementId)
  errorElement.innerText = message
  errorElement.style.color = 'red'
}

// Helper function to clear errors
function clearErrors () {
  const errorElements = document.querySelectorAll('.error-message')
  errorElements.forEach(element => {
    element.innerText = ''
  })
}
