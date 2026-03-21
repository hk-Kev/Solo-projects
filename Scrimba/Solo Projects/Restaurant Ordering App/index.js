import { menuArray } from "/data.js";
let menu = document.getElementById("menu-details");

let foodDetail = "";
menuArray.forEach((a) => {
  foodDetail += `
    <div class="menu-sect" id="${a.id}">
  <div class="left-side">
  <p class="emoji-icon">${a.emoji}</p>
  </div>
  <div class="right-side">
  <div class="food-details">
  <h1>${a.name}</h1>
      <p class="ingred">${a.ingredients}</p>
      <p>$${a.price}</p>
      </div>
      <i class="fa-solid fa-circle-plus"></i>
      </div>
      </div>;
      `;
});
menu.innerHTML = foodDetail;
