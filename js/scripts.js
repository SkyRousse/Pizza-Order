//Business logic
  function Pizza (size) {
    this.pizzaSize = size;
    this.pizzaToppings = [];
  };

  Pizza.prototype.getToppings = function() {
    var topping =
    this.pizzaToppings.push(topping);
  };

  Pizza.prototype.calculateCost = function () {
    //Pizza sizes have base value
    //each additional topping is $3
  };

  // .each(function() {
  //   debugger;
  //   pizzaToppings.push(toppings);
  // });//end toppings function

//User interface logic
$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    debugger;
    var inputtedSize = $("input[type='radio'][name='size']:checked").val();
    var newPizza = new Pizza(inputtedSize);
    $.each($("input[name='toppings']:checked"), function(){
      newPizza.pizzaToppings.push($(this).val());
    });
  });//end submit function
});//end doc ready function
