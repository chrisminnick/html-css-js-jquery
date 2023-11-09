$(document).ready(function () {
  // Initialize the jQuery Validation plugin on the form
  $('#contactForm').validate({
    // Specify validation rules
    rules: {
      userName: {
        required: true,
        minlength: 2,
      },
      userEmail: {
        required: true,
        email: true,
      },
      userUrl: {
        url: true,
      },
      userComments: {
        required: true,
      },
    },
    // Specify validation error messages
    messages: {
      userName: {
        required: 'Please enter your name',
        minlength: 'Your name must be at least 2 characters long',
      },
      userEmail: {
        required: 'Please enter your email address',
        email: 'Please enter a valid email address',
      },
      userUrl: {
        url: 'Please enter a valid URL',
      },
      userComments: {
        required: 'Please enter your comments',
      },
    },
    // Specify where to display the error messages
    errorPlacement: function (error, element) {
      error.appendTo(element.parent());
    },
    // Specify what happens when the form is submitted
    submitHandler: function (form) {
      form.submit();
    },
  });
});
