$(document).ready(function () {
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'GET',
    success: function (reviews) {
      reviews.forEach(function (review) {
        $('#reviews-list').append(
          `<li><strong>${review.title}</strong><p>${review.body}</p></li>`
        );
      });
    },
    error: function () {
      alert('Error retrieving reviews. Please try again later.');
    },
  });
  $('#new-review-form').submit(function (event) {
    event.preventDefault();

    var movieTitle = $('#movieTitle').val().trim();
    var reviewText = $('#reviewText').val().trim();

    if (movieTitle === '' || reviewText === '') {
      alert('Please fill in all fields.');
      return false;
    }

    // Assuming the API accepts POST requests to add a review
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts', // Replace with actual POST endpoint
      type: 'POST',
      data: JSON.stringify({
        title: movieTitle,
        body: reviewText,
        userId: 1, // Static user ID for demonstration
      }),
      contentType: 'application/json; charset=utf-8',
      success: function (newReview) {
        $('#reviews-list').prepend(
          `<li><strong>${newReview.title}</strong><p>${newReview.body}</p></li>`
        );
        $('#movieTitle').val('');
        $('#reviewText').val('');
      },
      error: function () {
        alert(
          'An error occurred while submitting the review. Please try again later.'
        );
      },
    });
  });
});
