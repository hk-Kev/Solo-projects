let searchBtn = document.getElementById("search-btn");
let movieSearched = document.getElementById("movie-search-area");
let mainSect = document.getElementById("main-section");

let something = "";
let film = "";
let watchlist = [];

let movieArray = [];
searchBtn.addEventListener("click", async () => {
  mainSect.innerHTML = "";
  movieArray = [];

  const res = await fetch(
    `http://www.omdbapi.com/?&apikey=62de1c07&s=${movieSearched.value}`,
  );
  const data = await res.json();

  for (let movie of data.Search) {
    const res1 = await fetch(
      `http://www.omdbapi.com/?&apikey=62de1c07&i=${movie.imdbID}`,
    );
    const data2 = await res1.json();
    movieArray.push(data2);
  }
  //   console.log(movieArray);
  let watchID = 0;
  for (let movie of movieArray) {
    film = `<section class="movie">
          <div class="poster-side" style="background-image:url(${movie.Poster})"></div>
          <div class="details-side">
            <div class="title-section">
              <h3>${movie.Title} ${movie.Year}</h3>
              <div>
                <i class="fa-solid fa-star" id="star"></i> <span>${movie.imdbRating}</span>
              </div>
              </div>
              <div class="movie-stats">
                  <span class="runtime">${movie.Runtime}</span>
                  <span class="genre">${movie.Genre}</span>
                  <button class= "watch-btn" id=${watchID}>
                      <i class="fa-solid fa-circle-plus"></i> Watchlist
                  </button>
              </div>
              <p class="plot-details">
              ${movie.Plot}
              </p>
          </div>
      </section>`;
    mainSect.innerHTML += film;
    watchID++;
  }
});

mainSect.addEventListener("click", function (e) {
  const btn = e.target.closest(".watch-btn");

  if (btn) {
    watchlist.push(movieArray[btn.id]);
  }
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
});

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
                      <i class="fa-solid fa-circle-plus"></i> Watchlist
                  </button>
              </div>
              <p class="plot-details">
              ${nana.Plot}
              </p>
          </div>
      </section>`;
  document.getElementById("watchlist-section").innerHTML += something;
  //   watchID++;
}
