import { Link } from "react-router-dom";
import featureimage from "./assets/homepage/featureimage.jpg";

function Feature() {
  return (
    <>
      <div className="feature">
        <div className="container">
          <div className="featurecontent">
            <div className="title ">
              <h1 className="displaytitle">Little Lemon</h1>
              <h2 className="subtitle">Chicago</h2>
            </div>
            <p className="para">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>

            <Link to="/booking/bookingform" className="nav-item">
              <button className="button primary buttontxt">
                Reserve a Table
              </button>
            </Link>
          </div>
          <div className="featureimage">
            <img src={featureimage} alt="restaurant food" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Feature;
