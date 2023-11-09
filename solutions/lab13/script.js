$(document).ready(function () {
  $('#contactForm').validate({
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
    messages: {
      userName: {
        required: 'Please enter your name.',
        minlength: 'Your name must consist of at least 2 characters.',
      },
      userEmail: {
        required: 'Please enter your email address.',
        email: 'Please enter a valid email address.',
      },
      userComments: {
        required: 'Please enter your comments.',
      },
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
});
