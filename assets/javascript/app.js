
$(document).ready(function() {

var food = ["tacos", "steak", "fried chicken", "pizza", "cheeseburger", "burrito", "ham", "eggs", "cereal", "avacado", "ribs"];

//Render buttons
var renderButtons = function() {

  $("#button-section").empty();

  for (var f = 0; f < food.length; f++) {
    var btn = $("<button class=btn-warning>");
    console.log(f);
    btn.addClass("button-section");
    btn.attr("data-name", food[f]);
    btn.text(food[f]);
    $("#button-section").append(btn);
  }
}

$("#add-food").on("click", function(event) {
  event.preventDefault();
  var newFood = $("#food-input").val().trim();
  food.push(newFood);
  renderButtons();
  console.log(newFood);
});

// $(document).on("click", "btn-warning button-section", displayFoodinfo)

renderButtons();

// $("button").on("click", function() {
//     var newFood = $(this).attr("data-newFood");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//       newFood + "&api_key=iNBuquivThBrVl4b2CknATIpDfO17Ash&limit=10";

//     // Performing an AJAX request with the queryURL
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {

//       var gifDiv = $("<div class='gif'>")

//       var rating = response.Rated;

//       var pOne = $("<p>").text("Rating: " + rating);
//     });

});