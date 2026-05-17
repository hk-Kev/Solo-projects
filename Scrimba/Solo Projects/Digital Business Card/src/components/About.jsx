import Interests from "./Interests";
export default function Aboutme() {
  return (
    <>
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
      <div className="text-stuff">
        <h3 className="header-names">About</h3>
        <p className="header-info">
          I'm a fronted developer with a particular interest in making things
          simple and automating daily tasks. I try to keep with security and
          best practices, and am always looking for new things to learn.
        </p>
        <Interests />
      </div>
    </>
  );
}
