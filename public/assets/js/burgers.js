$(function()  {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    //Grab burger name from form field.
    //When user submits burger name, set devoured state to false.
    var newBurger = {
    burger_type: $("#burger_type").val().trim(),
    eaten: 0
    };

    // Send the POST request using ajax.
    $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
    }).then(
    function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
    }
    );
  });
 
  $("#eat").on("click", function(event) {
    var id = $(this).data("id");

    var newEaten = {
      eaten: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEaten
    }).then(
      function() {
        console.log("changed eaten to"); 
        console.log(newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
