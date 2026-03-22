import { menuArray } from "/data.js";
let menu = document.getElementById("menu-details");
let orderedSection = document.getElementById("ordered-sec");
let orderedItems = [];
let totalOrdered = document.getElementById("total-ordered");
let price = 0;
let priceArr = [];
let orderedHtml = ``;

let thankYouMessage = `<p class="thanking">Thanks, Kevin! Your order is on it's way!</p>`;

let itemDetails = "";

let foodDetail = "";

// document.getElementById("pay-btn").preve;

orderedHtml = `<h2>Your Order</h2>
          <div id="ordered-sec"></div>

          <div class="ordered total-ordered" id="total-ordered"></div>

          <button class="pay-btn" id="complete-btn">Complete order</button>
          `;

menuArray.map((a) => {
  foodDetail += `
              <div class="menu-sect" >
              <div class="left-side">
              <p class="emoji-icon">${a.emoji}</p>
              </div>
              <div class="right-side">
              <div class="food-details">
              <h1>${a.name}</h1>
              <p class="ingred">${a.ingredients}</p>
              <p>$${a.price}</p>
              </div>
              <i class="fa-solid fa-circle-plus" id="${a.id}"></i>
              </div>
              </div>
              `;
});

menu.innerHTML = foodDetail;

// !isNaN(e.target.id

menu.addEventListener("click", function (e) {
  if (e.target.id == 1 || e.target.id == 2 || e.target.id == 3) {
    orderedItems.push(menuArray[Number(e.target.id) - 1]);
    document.getElementById("ordering-section").innerHTML = orderedHtml;

    let totalOrdered = document.getElementById("total-ordered");
    let orderedSection = document.getElementById("ordered-sec");
    console.log(orderedItems);
    orderedItems.map((a) => {
      itemDetails = `
              <div class="ordered">
              <h3>${a.name}</h3>
              <p>${a.price}</p>
              </div>
              `;
      price = a.price;
      orderedSection.innerHTML += itemDetails;
    });
    priceArr.push(price);

    totalOrdered.innerHTML = `
                    <h3>Total price:</h3>
                    <p>${priceArr.reduce((a, b) => a + b, 0)}</p>
            `;

    console.log(e.target);
  }

  document
    .getElementById("complete-btn")
    .addEventListener("click", function () {
      document.querySelector(".card-details").style.display = "block";
    });
});

document.getElementById("pay-btn").addEventListener("click", function () {
  document.querySelector(".card-details").style.display = "none";

  document.getElementById("ordering-section").innerHTML = thankYouMessage;
});
