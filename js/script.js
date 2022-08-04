let ComputerValue = Math.floor(Math.random() * 100);
function game() {
  let UserValue = document.getElementById("inputValue").value;
  if (UserValue == ComputerValue) {
    document.getElementById("suggestion").innerHTML =
      "Your Answer is Correct : " + ComputerValue;
  }
  if (UserValue < ComputerValue) {
    document.getElementById("suggestion").innerHTML = "Lowest Number";
  }
  if (UserValue > ComputerValue) {
    document.getElementById("suggestion").innerHTML = "Largest Number";
  }
}

