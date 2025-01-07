// Listen for form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault() // Prevent the default form submission

  // Get form values
  const username = document.getElementById('typeUsernameX').value
  const password = document.getElementById('typePasswordX').value

  // Prepare data to send as JSON
  const loginData = {
    username: username,
    password: password
  }

  localStorage.setItem('loginData', JSON.stringify(loginData))

  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => {
      const user = data.find(
        (user) => user.username.toLowerCase() === username.toLowerCase()
      )

      if (user && password === 'password123') {
        // Simulate password check
        alert('Login successful!')
        window.location.href = 'index.html'
      } else {
        alert('Invalid username or password.')
      }
    })
    .catch((error) => {
      console.error('Error:', error)
      alert('An error occurred. Please try again later.')
    })
})
