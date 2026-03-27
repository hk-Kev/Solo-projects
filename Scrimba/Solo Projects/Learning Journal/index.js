let mainSection = document.getElementById("main-section");

let viewMore = document.getElementById("view-more-link");

let clicked = false;

let text = `

    <section class="blog">
        <img
          src="images/blog-image-05.png"
          alt="Girl excited"
          class="blog-images"
        />
        <p>JULY 23, 2022</p>
        <h2>Blog four</h2>
        <p>
          I'm excited to start a new learning journey as a Scrimba Bootcamp
          student! After several months of learning in the Fronted Developer
          Career Path.
        </p>
      </section>
      <section class="blog">
        <img
          src="images/article-image-01.png"
          alt="Girl excited"
          class="blog-images"
        />
        <p>JULY 23, 2022</p>
        <h2>Blog five</h2>
        <p>
          I'm excited to start a new learning journey as a Scrimba Bootcamp
          student! After several months of learning in the Fronted Developer
          Career Path.
        </p>
      </section>

      <section class="blog">
        <img
          src="images/article-image-03.png"
          alt="Girl excited"
          class="blog-images"
        />
        <p>JULY 23, 2022</p>
        <h2>Blog six</h2>
        <p>
          I'm excited to start a new learning journey as a Scrimba Bootcamp
          student! After several months of learning in the Fronted Developer
          Career Path.
        </p>
      </section>`;

viewMore.addEventListener("click", function (e) {
  e.preventDefault();
  if (clicked === false) {
    mainSection.innerHTML += text;
    viewMore.textContent = "View Less";
    clicked = true;
  } else {
    mainSection.innerHTML = `<section class="blog">
        <img
          src="images/article-image-02.png"
          alt="Girl excited"
          class="blog-images"
        />
        <p>JULY 23, 2022</p>
        <h2>Blog one</h2>
        <p>
          I'm excited to start a new learning journey as a Scrimba Bootcamp
          student! After several months of learning in the Fronted Developer
          Career Path.
        </p>
      </section>
      <section class="blog">
        <img
          src="images/blog-image-03.png"
          alt="Girl excited"
          class="blog-images"
        />
        <p>JULY 23, 2022</p>
        <h2>Blog two</h2>
        <p>
          I'm excited to start a new learning journey as a Scrimba Bootcamp
          student! After several months of learning in the Fronted Developer
          Career Path.
        </p>
      </section>
      <section class="blog">
        <img
          src="images/blog-image-01.png"
          alt="Girl excited"
          class="blog-images"
        />
        <p>JULY 23, 2022</p>
        <h2>Blog three</h2>
        <p>
          I'm excited to start a new learning journey as a Scrimba Bootcamp
          student! After several months of learning in the Fronted Developer
          Career Path.
        </p>
      </section>`;
    clicked = false;
    viewMore.textContent = "View More";
  }
});
