import aboutimage1 from "./assets/homepage/about/aboutimage1.jpg";
import aboutimage2 from "./assets/homepage/about/aboutimage2.jpg";
function About() {
  return (
    <>
      <div className="about" id="about-section">
        <div className="container">
          <div className="content">
            <div className="title ">
              <h1 className="displaytitle">Little Lemon</h1>
              <h2 className="subtitle">Chicago</h2>
            </div>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div className="image">
            <img src={aboutimage1} alt="" />
            <img id="secondimg" src={aboutimage2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
