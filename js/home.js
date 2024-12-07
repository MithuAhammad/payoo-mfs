//  add money to the account
/*
s-1: add event handler
prevent page reload after form submit
s-2: get money to be added to the account balance
*/
// Step-1: add an event handler to the add money button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // prevent page reload after form submit
    event.preventDefault();

    // Step-2: get money to be added to the account
    const addMoneyInput = document.getElementById("input-add-money").value;

    // get the pin Number provided
    const pinNumberInput = document.getElementById("input-pin-number").value;
    console.log(pinNumberInput);
  });
