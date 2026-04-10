let getColorBtn = document.getElementById("fetch-color-scheme");
let selectedMode = document.getElementById("scheme-mode");
let colorPicked = document.getElementById("color-picker");

getColorBtn.addEventListener("click", () => {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorPicked.value.split("").slice(1).join("")}&mode=${selectedMode.value}&count=5`,
  )
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.colors.length; i++) {
        document.getElementById(`color-${i + 1}`).style.backgroundColor =
          `${data.colors[i].hex.value}`;
        document.getElementById(`hex-color-${i + 1}`).textContent =
          data.colors[i].hex.value;
      }
    });
});

document.getElementById("main").addEventListener("click", (event) => {
  let id = Number(event.target.id.split("").slice(-1)[0]);
  if (id) {
    let hexColor = document.getElementById(`hex-color-${id}`).textContent;
    console.log(hexColor);
    navigator.clipboard.writeText(hexColor);
  }
});
