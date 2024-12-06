document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault(); //vejal to beginners
    const mobileNumber = document.getElementById("mobile-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    // console.log(mobileNumber, pinNumber);
    // bad way to validate
    if (mobileNumber === "5" && pinNumber === "1234") {
      console.log("you are login");
      window.location.href='/home.html'
    } else {
      alert("wrong phone & pin ");
    }
  });
