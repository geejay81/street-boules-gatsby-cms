import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.png";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import youtube from "../img/social/youtube.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-dark has-text-white-ter">
        <div className="content has-text-centered">
          <div className="container">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                  <img
                  src={logo}
                  alt="Street Boules"
                  style={{ maxWidth: "14em" }}
                />
              </div>
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/history">
                        History
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/rules">
                        Rules
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/teams">
                        Teams
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                
                <a title="twitter" href="https://twitter.com/StreetBoules/">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/streetboules/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="youtube" href="https://www.youtube.com/@streetboules/">
                  <img
                    src={youtube}
                    alt="Youtube"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
