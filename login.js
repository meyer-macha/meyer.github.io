$('form[action="/login"]').submit(function() {
    // Obtain the form data
    var formData = $(this).serializeArray();
  
    // Send the form data to the server
    $.ajax({
      url: '/login',
      type: 'POST',
      data: formData,
      success: function(response) {
        // Manage the successful response
      },
      error: function(error) {
        // Manage the error response
      }
    });
  });