let numberBtn = document.querySelectorAll(".number-btn");
let answerArea = document.getElementById("display-box");
let inputArea = document.getElementById("input-box");
numberBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log(btn.innerText);
    // answerArea.innerText = "";
    inputArea.innerText += btn.innerText;
  });
});
