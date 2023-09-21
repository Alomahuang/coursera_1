import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import mainlogo from "./homeAssets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isHamburgerMenuOpen, sethamburgerMenu] = useState(false);
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
  const THRESHOLD = 0;

  const ScrollDirection = ({ render }) => {
    const [scrollDirection, setScrollDirection] = useState("up");

    const blocking = useRef(false);
    const prevScrollY = useRef(0);

    useEffect(() => {
      prevScrollY.current = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;

        if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
          const newScrollDirection =
            scrollY > prevScrollY.current ? "down" : "up";

          setScrollDirection(newScrollDirection);

          prevScrollY.current = scrollY > 0 ? scrollY : 0;
        }

        blocking.current = false;
      };

      const handleScroll = () => {
        if (!blocking.current) {
          blocking.current = true;
          window.requestAnimationFrame(updateScrollDirection);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollDirection]);

    return render({ scrollDirection });
  };

  function toggleHamburgerMenu() {
    sethamburgerMenu(!isHamburgerMenuOpen);
  }

  return (
    <>
      <ScrollDirection
        render={({ scrollDirection }) => (
          <nav
            className="laptopNavBar"
            style={
              scrollDirection === "up"
                ? {
                    position: "fixed",
                    translateX: "translateY(0px)",
                    transitionProperty: "transform",
                    transitionDuration: ".8s",
                    transitionTimingFunction: "ease-in-out",
                  }
                : {
                    position: "static",
                    translateX: "translateY(-200px)",
                    transitionProperty: "transform",
                    transitionDuration: ".8s",
                    transitionTimingFunction: "ease-in-out",
                  }
            }
          >
            <div className="container">
              <Link to="/" className="nav-item">
                <img src={mainlogo} alt="" />
              </Link>

              <ul className="leadtext">
                <li>
                  <Link to="/" className="nav-item">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="/#about" onClick={handleClick("about")}>
                    About
                  </a>
                </li>
                <li>
                  <a href="/#menu" onClick={handleClick("menu")}>
                    Menu
                  </a>
                </li>
                <li>
                  <Link to="/booking/bookingform" className="nav-item">
                    Reservation
                  </Link>
                </li>
                <li>
                  <Link to="/error" className="button secondary buttontxt">
                    Order Online
                  </Link>
                </li>
                <li>
                  <Link to="/error">Login</Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
      />
      <nav className="mobNav">
        <div className="mobileNavBar">
          <Link to="/" className="nav-item">
            <img src={mainlogo} alt="" />
          </Link>
          <div onClick={toggleHamburgerMenu} className="menuIcon">
            <FontAwesomeIcon icon={faBars} size="2xl" />
          </div>
        </div>
        {isHamburgerMenuOpen ? (
          <div className="hamburgerMenu">
            <ul className="leadtext">
              <li onClick={toggleHamburgerMenu}>
                <Link to="/" className="nav-item">
                  Home
                </Link>
              </li>
              <li onClick={toggleHamburgerMenu}>
                <a
                  href="/#about"
                  onClick={handleClick("about")}
                  className="nav-item"
                >
                  About
                </a>
              </li>
              <li onClick={toggleHamburgerMenu}>
                <a
                  href="/#menu"
                  onClick={handleClick("menu")}
                  className="nav-item"
                >
                  Menu
                </a>
              </li>
              <li onClick={toggleHamburgerMenu}>
                <Link to="/booking/bookingform" className="nav-item">
                  Reservation
                </Link>
              </li>
              <li onClick={toggleHamburgerMenu}>
                <Link to="/error" className="button secondary buttontxt">
                  Order Online
                </Link>
              </li>
              <li onClick={toggleHamburgerMenu}>
                <Link to="/error">Login</Link>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </>
  );
}
export default Header;
