$('.slick-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      }
    }
  ]
})

// js for screen smooth scrolling
document.querySelectorAll('.nav-link,navbar-brand').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    const targetId = this.getAttribute('href').substring(1)
    const targetSection = document.getElementById(targetId)
    targetSection.scrollIntoView({ behavior: 'smooth' })
  })
})
// for small screen auto close toggle when click any navigation tab
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', function () {
    const navbar = document.querySelector('.navbar-collapse')
    if (navbar.classList.contains('show')) {
      new bootstrap.Collapse(navbar).hide()
    }
  })
})

// validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault()

  // Clear previous error messages and remove red borders
  document.querySelectorAll('.error-message').forEach(error => error.style.display = 'none')
  document.querySelectorAll('.form-control').forEach(input => input.classList.remove('invalid'))

  // Get form values
  const name = document.getElementById('name').value.trim()
  const phone = document.getElementById('tele').value.trim()
  const email = document.getElementById('email').value.trim()
  const message = document.getElementById('msg').value.trim()

  let isValid = true

  // Validate Name
  if (!name) {
    document.getElementById('nameError').style.display = 'block'
    document.getElementById('name').classList.add('invalid')
    isValid = false
  }

  // Validate Phone Number (10 digits)
  if (!/^\d{10}$/.test(phone)) {
    document.getElementById('teleError').style.display = 'block'
    document.getElementById('tele').classList.add('invalid')
    isValid = false
  }

  // Validate Email
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById('emailError').style.display = 'block'
    document.getElementById('email').classList.add('invalid')
    isValid = false
  }

  // Validate Message
  if (!message) {
    document.getElementById('msgError').style.display = 'block'
    document.getElementById('msg').classList.add('invalid')
    isValid = false
  }

  // If form is valid, submit the form
  if (isValid) {
    this.submit() // Proceed with form submission
  }
})

// submit form with jquery (ajax)
document.getElementById('tele').addEventListener('input', function (e) {
  // Remove any non-numeric characters
  this.value = this.value.replace(/[^0-9]/g, '')
})

$('#ajaxForm').submit(function (e) {
  e.preventDefault()

  var action = $(this).attr('action')
  console.log(FormData)
  console.log('Submitting form...')

  $.ajax({
    type: 'POST',
    url: 'https://formcarry.com/s/jYsqBr-VFgd',
    crossDomain: true,
    data: new FormData(this),
    dataType: 'json',
    processData: false,
    contentType: false,
    headers: {
      'Accept': 'application/json'
    }
  }).done(function (response) {
    console.log('Form submitted successfully', response)
    alert('The form was submitted successfully.')
  }).fail(function (xhr, status, error) {
    console.log('Submission failed: ', status, error)
    alert('An error occurred! Please try again later.')
  })
})
// 
// Google Login Redirection
document.getElementById('googleLogin').addEventListener('click', function () {
  window.location.href = 'https://accounts.google.com/SignOutOptions?hl=en&continue=https://myaccount.google.com/%3Fhl%3Den%26utm_source%3DOGB%26utm_medium%3Dact%26gar%3DWzJd%26nlr%3D1&ec=GBRAwAE'
})

// Facebook Login Redirection
document.getElementById('facebookLogin').addEventListener('click', function () {
  window.location.href = 'https://www.facebook.com/r.php'
})
