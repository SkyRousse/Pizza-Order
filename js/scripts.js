//Business logic
  function Pizza (size) {
    this.pizzaSize = size;
    this.pizzaToppings = [];
  };

  Pizza.prototype.calculateCost = function () {
    var toppingsTotal = this.pizzaToppings.length * 3;
    var orderTotal = this.pizzaSize + toppingsTotal;
    return orderTotal;
  };

//User interface logic
$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
        debugger;
    var inputtedSize = parseInt($("input[type='radio'][name='size']:checked").val());
    if(inputtedSize !== 14 && inputtedSize !== 16 && inputtedSize !== 25) {
      alert("you must select a size");
    }
    else {
      var newPizza = new Pizza(inputtedSize);
      $.each($("input[name='toppings']:checked"), function() {
        newPizza.pizzaToppings.push($(this).val());
      });
      var outputTotal = newPizza.calculateCost();
      $(".outputSize").append("<h4>The base price of the selected pizza size is: $" + newPizza.pizzaSize + "</h4>");
      $(".outputIngredients").append("<h4>Each Topping is $3 you selected " + newPizza.pizzaToppings.length + " toppings" + "</h4>");
      $(".outputTotal").append("<h2>Your Order Total is: $" + outputTotal + "</h2>");
    }
  });//end submit function
});//end doc ready function
