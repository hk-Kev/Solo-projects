export default function Info() {
  return (
    <>
      <div className="main-image">
        <img id="img" src="/someone.png" alt="A woman smiling" />
      </div>
      <div className="main-info">
        <h1 className="name">Laura Smith</h1>
        <h2>Frontend Developer</h2>
        <p>laurasmith.website</p>

        <div className="buttons">
          <button id="email-btn">
            {" "}
            <i className="fa-solid fa-envelope"></i>Email
          </button>

          <button id="linked-btn">
            {" "}
            <i className="fa-brands fa-linkedin"></i>LinkedIn
          </button>
        </div>
      </div>
    </>
  );
}
{
}
