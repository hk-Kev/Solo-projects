let numberBtn = document.querySelectorAll(".number-btn");
let answerArea = document.getElementById("display-box");
let inputArea = document.getElementById("input-box");
let operationBtn = document.querySelectorAll(".symbol-btn");
let eql = document.getElementById("eql-btn");
let num1 = "";
let num2 = "";
let sign = "";
let result;
let clearBtn = document.getElementById("clear-btn");

numberBtn.forEach((btn) => {
  btn.addEventListener("click", function getValue() {
    console.log(btn.innerText);
    inputArea.value += btn.innerText;
    if (sign != "") {
      num2 += btn.innerText;
    } else {
      num1 += btn.innerText;
    }
  });
});

operationBtn.forEach((btn) => {
  btn.addEventListener("click", function calc() {
    sign = btn.textContent;
    inputArea.value = ``;
    answerArea.textContent = num1 + " " + sign;
  });
});

eql.addEventListener("click", function () {
  if (num1 == "" || num2 == "" || sign == "") {
    answerArea.textContent = "Something missing...";
  } else {
    switch (sign) {
      case "+":
        result = Number(num1) + Number(num2);
        break;
      case "-":
        result = Number(num1) - Number(num2);
        break;
      case "x":
        result = Number(num1) * Number(num2);
        break;

      case "÷":
        result = Number(num1) / Number(num2);
        break;

      default:
        result = "Oooops";
    }

    answerArea.textContent = num1 + " " + sign + " " + num2;
    inputArea.value = result;
  }
});

clearBtn.addEventListener("dblclick", function () {
  num1 = "";
  num2 = "";
  result = "";
  answerArea.textContent = ".Calculator.";
  inputArea.value = "";
  sign = "";
});
