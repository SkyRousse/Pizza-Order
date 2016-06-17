//Business logic
  function Pizza (size) {
    this.pizzaSize = size;
    this.pizzaToppings = [];
  };

  Pizza.prototype.calculateCost = function () {
    debugger;
    var toppingsTotal = this.pizzaToppings.length * 3;
    var orderTotal = this.pizzaSize + toppingsTotal;
    return orderTotal;
  };

//User interface logic
$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    var inputtedSize = parseInt($("input[type='radio'][name='size']:checked").val());
    var newPizza = new Pizza(inputtedSize);
    $.each($("input[name='toppings']:checked"), function() {
      newPizza.pizzaToppings.push($(this).val());
    });
    var outputTotal = newPizza.calculateCost();
    $(".outputTotal").text("Your Order Total is: $" + outputTotal);
  });//end submit function
});//end doc ready function
