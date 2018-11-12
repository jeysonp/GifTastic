
$(document).ready(function () {

  var food = ["tacos", "steak", "fried chicken", "pizza", "cheeseburger", "burrito", "ham", "eggs", "cereal", "avacado", "ribs", "fries", "pie", "sushi", "ice cream", "spagetti"];

  function renderButtons() {

    $("#button-section").empty();

    for (var f = 0; f < food.length; f++) {
      var btn = $("<button>");
      console.log(f);
      btn.addClass("button-section");
      btn.attr("data-name", food[f]);
      btn.text(food[f]);
      $("#button-section").append(btn);
    }
  }

  $("#add-food").on("click", function (event) {
    event.preventDefault();
    var newFood = $("#food-input").val().trim();
    food.push(newFood);
    renderButtons();
    console.log(newFood);
  });

  renderButtons();

  $("button").on("click", function () {
    var foodButton = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      foodButton + "&api_key=iNBuquivThBrVl4b2CknATIpDfO17Ash&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
    })
      .then(function (response) {
      console.log(response);
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var foodDiv = $("<div>");
        var p = $("<p>").text("Rating: " + results[i].rating);
        var foodImage = $("<img>");
        foodImage.attr("src", results[i].images.fixed_height.url);
        foodDiv.append(p);
        foodDiv.append(foodImage);
        
        $("#gifs-section").prepend(foodDiv);
      }
      // $(document).on("click", "#button-section", renderButtons);
    });
  });
});  
