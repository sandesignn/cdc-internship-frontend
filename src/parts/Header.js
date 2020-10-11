import React from "react";
import "bootstrap";
import Button from "../elements/Button";
import BrandIcon from "../parts/IconText";
import icon from "../assets/images/icons/icon-menu.svg";
export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? "active" : "";
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
          <button
            className="navbar-toggler btn-primary "
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={icon} width="18" alt="icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${getNavLinkClass("/internship")}`}>
                <Button className="nav-link" type="link" href="/internship">
                  Internship
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/petunjuk")}`}>
                <Button className="nav-link" type="link" href="/petunjuk">
                  Petunjuk
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/login")}`}>
                <Button
                  className="btn px-3"
                  hasShadow
                  isPrimary
                  type="link"
                  href="/signin"
                >
                  Sign in
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
