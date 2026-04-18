let watchlistArray = JSON.parse(localStorage.getItem("watchlist")) || [];
let something = "";
let watchlistSection = document.getElementById("watchlist-section");
let listID = 0;

for (let nana of watchlistArray) {
  something = `<section class="movie" id="${listID}">
  <div class="poster-side" style="background-image:url(${nana.Poster})"></div>
  <div class="details-side">
  <div class="title-section">
  <h3>${nana.Title} ${nana.Year}</h3>
  <div>
  <i class="fa-solid fa-star" id="star"></i> <span>${nana.imdbRating}</span>
  </div>
  </div>
  <div class="movie-stats">
  <span class="runtime">${nana.Runtime}</span>
  <span class="genre">${nana.Genre}</span>
  <button class= "watchlist-btn"" >
  <i class="fa-solid fa-circle-minus"></i> Remove
  </button>
  </div>
  <p class="plot-details">
  ${nana.Plot}
  </p>
  </div>
  </section>`;
  watchlistSection.innerHTML += something;
  listID++;
}

document
  .getElementById("watchlist-section")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("watchlist-btn")) {
      const section = e.target.closest(".movie");
      if (section) {
        let id = section.id;

        section.classList.add("vanisher");
        console.log("it shouldve worked");
        watchlistArray = watchlistArray.filter((item, index) => index != id);
        localStorage.setItem("watchlist", JSON.stringify(watchlistArray));
      }
    }
    checker();
  });

function checker() {
  if (watchlistArray.length == 0) {
    watchlistSection.innerHTML = `<section id="original-stuff">
          <p>Your watchlist is looking a little empty....</p>

          <p>
            <i class="fa-solid fa-circle-plus"></i
            ><a href="index.html"> Let's add some movies</a>
          </p>
        </section>`;
  }
}
