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
    // console.log(pinNumberInput);
    // step-3: verify pin number
    // Wrong way to validate pin number
    if (pinNumberInput === "1234") {
      //   step -4: get the current balance
      const balance = document.getElementById("account-balance").innerText;

      //   step-5: add addMoneyInput with balance

      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);
      
      const newBalance = addMoneyNumber + balanceNumber;
      console.log(newBalance);

    //   Show out put
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("failed to add money ! Please Try again ");
    }
  });
