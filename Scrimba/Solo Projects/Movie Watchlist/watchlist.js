let watchlistArray = JSON.parse(localStorage.getItem("watchlist")) || [];
let something = "";
let watchlistSection = document.getElementById("watchlist-section");
watchlistSection.innerHTML = "";

for (let nana of watchlistArray) {
  something = `<section class="movie">
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
                  <button class= "watch-btn" >
                      <i class="fa-solid fa-circle-minus"></i> Remove
                  </button>
              </div>
              <p class="plot-details">
              ${nana.Plot}
              </p>
          </div>
      </section>`;
  watchlistSection.innerHTML += something;
  //   watchID++;
}
