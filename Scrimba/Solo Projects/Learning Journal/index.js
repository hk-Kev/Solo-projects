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

let home = `<div id="home-header">
          <div class="header-content">
            <p>JULY 23, 2022</p>
            <h1>My new journey as a bootcamp student.</h1>
            <p id="subheading">
              After serveral months of learning in the Frontend Developer Career
              Path, I've made the big jump over to the Bootcamp to get expert
              code reviews of my Solo Projects and meet like-minded peers.
            </p>
          </div>
        </div>`;
let aboutMe = `<div id="about-me-section">
          <img src="/images/image 18.png" alt="Man smiling" id="about-me-img" />
          <div id="about-me-intro">
            <h1>
              Hi there! My name is Roku and welcome to my learning journal.
            </h1>
            <p class="about-me-subheading">
              After serveral months of learning in the Frontend Developer Career
              Path, I've made the big jump over to the Bootcamp to get expert
              code reviews of my Solo Projects and meet like-minded peers.
            </p>
          </div>
        </div>
        <div class="about-me-details">
          <strong>How I stay committed to learning</strong>
          <p class="about-me-subheading">
            I like to think of myself as a lifelong learner. I used to spend
            hours and hours learning, then try to create simple projects using
            what I learned or work new techniques into existing projects.

            <br /><br />

            While that was fun, I felt like it would be helpful to share what I
            was learning and most thigns about my journey with the world.
          </p>

          <strong>How I got started</strong>
          <p class="about-me-subheading">
            I started simple and gradually grew my learning journal site. I
            would take notes about what I was learning. After each learning
            session, I'd use my notes to not only reflect on what I learned but
            also write short summaries of what I learned using my own words.

            <br />
            <br />

            That helped me grow what I was learning, and I realizd that posting
            my learning summaries was also helping others learn and stay
            motivated.
          </p>
        </div>`;

let blog = `<div class="blog-section">
          <p>JULY 23, 2022</p>
          <h1>My new journey as a bootcamp student</h1>
          <p id="blog-details">
            After serveral months of learning in the Frontend Developer Career
            Path, I've made the big jump over to the Bootcamp to get expert code
            reviews of my Solo Projects and meet like-minded peers.
          </p>
          <img src="/images/article-image-hero.png" alt="" />
        </div>
        <div class="about-me-details">
          <strong>How I stay committed to learning</strong>
          <p class="about-me-subheading">
            I like to think of myself as a lifelong learner. I used to spend
            hours and hours learning, then try to create simple projects using
            what I learned or work new techniques into existing projects.

            <br /><br />

            While that was fun, I felt like it would be helpful to share what I
            was learning and most thigns about my journey with the world.
          </p>

          <strong>How I got started</strong>
          <p class="about-me-subheading">
            I started simple and gradually grew my learning journal site. I
            would take notes about what I was learning. After each learning
            session, I'd use my notes to not only reflect on what I learned but
            also write short summaries of what I learned using my own words.

            <br />
            <br />

            That helped me grow what I was learning, and I realizd that posting
            my learning summaries was also helping others learn and stay
            motivated.
          </p>
        </div>
`;

document.getElementById("home").addEventListener("click", function () {
  document.getElementById("home-header-section").innerHTML = home;
  document.getElementById("about-me-header").innerHTML = "";
  document.getElementById("blog-section").innerHTML = "";
});

document.getElementById("about-me").addEventListener("click", function () {
  document.getElementById("home-header-section").innerHTML = "";
  document.getElementById("about-me-header").innerHTML = aboutMe;
  document.getElementById("blog-section").innerHTML = "";
});

document.getElementById("blog").addEventListener("click", function () {
  document.getElementById("home-header-section").innerHTML = "";
  document.getElementById("about-me-header").innerHTML = "";
  document.getElementById("blog-section").innerHTML = blog;
});
