import logo from "./homeAssets/logo-white.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const socials = [
    {
      icon: faFacebook,
      description: "Facebook",
      url: "https://facebook.com",
      id: 1,
    },
    {
      icon: faLinkedin,
      description: "Linkedin",
      url: "https://www.linkedin.com",
      id: 2,
    },
    {
      icon: faInstagram,
      description: "Instagram",
      url: "https://instagram.com",
      id: 3,
    },
    {
      icon: faTwitter,
      description: "Twitter",
      url: "https://twitter.com",
      id: 4,
    },
  ];

  // {
  //   icon: faEnvelope,
  //   url: "mailto: hello@example.com",
  // },
  return (
    <>
      <footer>
        <div className="container">
          <div className="group">
            <Link to="/" className="nav-item">
              <img src={logo} alt="Little Lemon" />
            </Link>
          </div>
          <div className="group">
            <h2 className="sectiontitle">Quick Links</h2>
            <ul>
              <li className="leadtext">
                <a href=" /#about" onClick={handleClick("about")}>
                  About
                </a>
              </li>
              <li className="leadtext">
                <Link to="/booking/bookingform" className="nav-item">
                  Reservation
                </Link>
              </li>
              <li className="leadtext">
                <a href="/#menu" onClick={handleClick("menu")}>
                  Menu
                </a>
              </li>
              <li className="leadtext">
                <a href="">Order Online</a>
              </li>
            </ul>
          </div>

          <div className="group">
            <h2 className="sectiontitle">Contact</h2>
            <ul>
              <li className="leadtext">
                <FontAwesomeIcon icon={faLocationDot} size="sm" />
                <span>xx, Street Name,</span>
              </li>
              <li className="leadtext" id="textwithspace">
                Location, Chicago
              </li>

              <li className="leadtext">
                <FontAwesomeIcon icon={faPhone} size="sm" />
                <span>+xx-xxx xxx xxx</span>
              </li>
              <li className="leadtext">
                <FontAwesomeIcon icon={faEnvelope} size="sm" />
                <span>info@littlelemon.com</span>
              </li>
            </ul>
          </div>

          <div className="group">
            <h2 className="sectiontitle">Follow Us on</h2>
            <ul>
              {socials.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="leadtext"
                    >
                      <FontAwesomeIcon icon={item.icon} size="sm" />
                      <span>{item.description}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
