const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];
let userinfo = "";

for (let i = 0; i < 3; i++) {
  userinfo = `
  <div class="user-info" >
  <img
          class="profile-pictures"
          src="${posts[i].avatar}"
          alt="Vangogh Profile Picture"
        />
        <div class="names">
        <p class="username">${posts[i].name}</p>
        <p>${posts[i].location}</p>
        </div>
     </div>   
  <div id="main-stuff">
    <section>
          <img
            class="posted-picture"
            src="${posts[i].post}"
            alt="Post by ${posts[i].name}"
            />
        </section>
        <section>
        
        <img
              class="icon-pictures like-icon"
              
              src="images/icon-heart.png"
              alt="heart icon"
            />
          
          <img
            class="icon-pictures"
            src="images/icon-comment.png"
            alt="comment icon"
          />
          <img
            class="icon-pictures"
            src="images/icon-dm.png"
            alt="share icon"
          />
          </section>
        <footer>
          <p><span class="like-count">${posts[i].likes}</span> likes</p>
          <p><span>${posts[i].username}</span> ${posts[i].comment}</p>
        </footer>
        
        </div>
        `;

  const userInformation = document.getElementById("user-information");
  const postcotainer = document.createElement("div");
  postcotainer.innerHTML = userinfo;
  userInformation.appendChild(postcotainer);

  let likes = postcotainer.querySelector(".like-count");
  let heartIcon = postcotainer.querySelector(".like-icon");
  let toggle = false;
  heartIcon.addEventListener("click", function () {
    let number = posts[i].likes;
    console.log(number);
    if (toggle == true) {
      heartIcon.src = "images/icon-heart.png";
      posts[i].likes--;
    } else {
      heartIcon.src = "images/heartedIcon.png";
      posts[i].likes++;
    }
    likes.textContent = posts[i].likes;
    toggle = !toggle;
  });
}
