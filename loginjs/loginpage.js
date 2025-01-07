document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault() // Prevent the default form submission

  // Get form values
  const username = document.getElementById('typeUsernameX').value.trim()
  const password = document.getElementById('typePasswordX').value.trim()

  // Clear previous errors
  clearErrors()

  let isValid = true

  // Validate inputs: If either field is empty, add red border
  if (username === '') {
    document.getElementById('typeUsernameX').classList.add('invalid')
    isValid = false
  }

  if (password === '') {
    document.getElementById('typePasswordX').classList.add('invalid')
    isValid = false
  }

  if (!isValid) {
    return // Prevent form submission if validation fails
  }

  // Retrieve stored login data from localStorage
  const storedLoginData = JSON.parse(localStorage.getItem('loginData'))

  if (storedLoginData) {
    // Check if username and password match the stored data
    if (storedLoginData.username === username && storedLoginData.password === password) {
      // alert('Login successful!')
      window.location.href = 'index.html' // Redirect to the home page
    } else {
      // Highlight the fields in red if username or password is incorrect
      document.getElementById('typeUsernameX').classList.add('invalid')
      document.getElementById('typePasswordX').classList.add('invalid')
      // alert('Invalid username or password. Please try again.')
    }
  } else {
    // If no stored data is found
    alert('No user data found in local storage.')
  }
})

// Clear previous validation errors (remove red borders)
function clearErrors () {
  document.getElementById('typeUsernameX').classList.remove('invalid')
  document.getElementById('typePasswordX').classList.remove('invalid')
}
$(document).ready(function () {
  $('#loginForm').on('submit', function (event) {
    event.preventDefault() // Prevent default form submission

    // Get form values
    const username = $('#typeUsernameX').val().trim()
    const password = $('#typePasswordX').val().trim()

    // Clear previous errors
    clearErrors()

    let isValid = true

    // Validate inputs: If either field is empty, add red border and error message
    if (username === '') {
      $('#typeUsernameX').addClass('invalid')
      $('#usernameError').text('Username is required.') // Display error message
      isValid = false
    }

    if (password === '') {
      $('#typePasswordX').addClass('invalid')
      $('#passwordError').text('Password is required.') // Display error message
      isValid = false
    }

    // Prevent form submission if validation fails
    if (!isValid) {
      return
    }

    // Retrieve stored login data from localStorage
    const storedLoginData = JSON.parse(localStorage.getItem('loginData'))

    if (storedLoginData) {
      if (storedLoginData.username === username && storedLoginData.password === password) {
        console.log('Login successful!')
        window.location.href = 'index.html' // Redirect to the home page
      } else {
        $('#typeUsernameX').addClass('invalid')
        $('#typePasswordX').addClass('invalid')
        $('#usernameError').text('Invalid username or password.') // Error message
        $('#passwordError')?.text('Invalid username or password.') // Error message
        // alert('Invalid username or password. Please try again.')
      }
    } else {
      // If no stored data is found
      alert('No user data found in local storage.')
    }
  })

  // Clear previous validation errors (remove red borders and error messages)
  function clearErrors () {
    $('#typeUsernameX').removeClass('invalid')
    $('#typePasswordX').removeClass('invalid')
    $('#usernameError').text('') // Clear error message
    $('#passwordError').text('') // Clear error message
  }
})
