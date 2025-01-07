$(document).ready(function () {
  // Form submission event
  $('#forgotPasswordForm').on('submit', function (e) {
      e.preventDefault(); // Prevent form submission

      // Clear previous errors
      clearErrors();

      var emailInput = $('#email');
      var email = emailInput.val().trim();
      var isValid = true;

      // Custom validation for email using jQuery
      if (email === '') {
          emailInput.addClass('is-invalid'); // Add red border for invalid input
          $('#emailError').text('Email is required.').show();
          isValid = false;
      } else if (!validateEmail(email)) {
          emailInput.addClass('is-invalid'); // Add red border for invalid input
          $('#emailError').text('Please enter a valid email address.').show();
          isValid = false;
      }

      // Proceed if email is valid
      if (isValid) {
          // Retrieve user data from localStorage
          var storedUserData = JSON.parse(localStorage.getItem('userData'));

          if (storedUserData && storedUserData.email === email) {
              alert('Password reset link has been sent to your email address!');
              window.location.href = 'resetPassword.html'; // Redirect to the reset password page
          } else {
              // If email doesn't match the stored email, make the input red and show an error
              emailInput.addClass('is-invalid'); // Add red border
              $('#emailError').text('Email not found in our records!').show();
          }
      }
  });

  // Validate email format
  function validateEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  // Clear errors from the form
  function clearErrors() {
      $('#email').removeClass('is-invalid'); // Remove red border from email field
      $('#emailError').hide(); // Hide error message
  }
});