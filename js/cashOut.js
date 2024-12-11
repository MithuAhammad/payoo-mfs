document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = document.getElementById("input-cash-out").value;
    const cashOutNumber = parseFloat(cashOut);
    // console.log(cashOut);
    const pinNumber = document.getElementById("input-cashOut-pin").value;
    // wrong way to verify pon number
    if (pinNumber === "1234") {
      const balance = document.getElementById("account-balance").innerText;
      const balanceNumber = parseFloat(balance);

      const newBalance = balanceNumber - cashOutNumber;
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed To Cash Out , Please try Again LAter");
    }
  });
