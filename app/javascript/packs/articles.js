$( document ).on('click', ".js--search", function(e) {
  e.preventDefault();
  let title = $("#title").val();
  $.ajax({
    url: '/articles',
    data: { title: title },
    method: 'get',
    success: function(response) {
      $("ul#articles").empty();
      $.each(response, function( index, article ) {
        let row = "<li>" + article.title + "</li>"
        $("ul#articles").append(row);
      });
    },
    error: function(error) {
      console.log(error)
    }
  })
});