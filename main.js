// Generate Random Numbers
let generatePinBtn = document.getElementById("generatePinBtn");
generatePinBtn.addEventListener("click", function () {
  let pinNumber = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("pinValue").value = pinNumber;
});

// Number Pad
let calcArea = document.getElementById("inner-area");
calcArea.addEventListener("click", function (e) {
  let typedNumber = e.target.innerText;
  if (typedNumber !== "<" && typedNumber !== "C") {
    let numbers = document.getElementById("digitsBox").value + typedNumber;
    document.getElementById("digitsBox").value = numbers;
    if (numbers.length > 4) {
      alert(
        "Please Have a look at the pin number. It must be a 4 digit number."
      );
    }
  }
  backSpace(typedNumber);
  clearBtn(typedNumber);
});

// Backspace
function backSpace(clickBtn) {
  if (clickBtn == "<") {
    let inputValues = document.getElementById("digitsBox").value;
    document.getElementById("digitsBox").value = inputValues.substr(
      0,
      inputValues.length - 1
    );
    document.getElementById("match").style.display = "none";
    document.getElementById("notMatch").style.display = "none";
  }
}

// Clear Button
function clearBtn(clickBtn) {
  if (clickBtn == "C") {
    document.getElementById("digitsBox").value = "";
    showHide("match", "none");
    showHide("notMatch", "none");
  }
}

let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function () {
  let pinValue = parseInt(document.getElementById("pinValue").value);
  let digitsBox = parseInt(document.getElementById("digitsBox").value);

  if (pinValue == digitsBox) {
    showHide("match", "block");
    document.getElementById("tryLeft").innerText = "3";
  } else {
    let tryLeft = parseInt(document.getElementById("tryLeft").innerText);
    if (tryLeft == 0) {
      showHide("submit", "none");
      document.querySelector(".action-left").innerText =
        "You have used all try options";
    }
    if (tryLeft > 0 && tryLeft <= 3) {
      document.getElementById("tryLeft").innerText = tryLeft - 1;
    }
    showHide("notMatch", "block");
  }
});

//Showing or hiding
function showHide(id, property) {
  document.getElementById(id).style.display = property;
}
