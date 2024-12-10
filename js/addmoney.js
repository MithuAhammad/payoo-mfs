document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addInputField = document.getElementById("input-add-money").value;
    const pinInputField = document.getElementById("input-pin-number").value;

    if (pinInputField === "1234") {
      const availableBalance =
        document.getElementById("account-balance").innerText;
      // console.log(availableBalance);
      const addMoneyNumber = parseFloat(addInputField);
      //   console.log(addMoneyNumber);
      const balanceNumber = parseFloat(availableBalance);
      //   console.log(balanceNumber);

      const calculateMoney = addMoneyNumber + balanceNumber;
      console.log(calculateMoney);
      document.getElementById("account-balance").innerText = calculateMoney;
    } else {
      alert("please add corract pin");
    }
  });
