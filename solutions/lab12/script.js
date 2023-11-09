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
  $('#new-review-form').on('submit', function (event) {
    event.preventDefault();

    let movieTitle = $('#movieTitle').val().trim();
    let reviewText = $('#reviewText').val().trim();
    let movieRating = $('#movieRating').val().trim();

    if (movieTitle === '' || reviewText === '' || movieRating === '') {
      alert('Please fill in all fields.');
      return false;
    }
    // Check if the rating is 2 or below, and ask for confirmation
    if (
      parseInt(movieRating) <= 2 &&
      !confirm('Are you sure you want to give this movie a low rating?')
    ) {
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
