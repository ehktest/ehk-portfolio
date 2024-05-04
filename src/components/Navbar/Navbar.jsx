import "./Navbar.scss";

import { links } from "../../constants";

import Hamburger from "./Hamburger/Hamburger";
import Toggle from "../../theme/Toggle/Toggle";

import { useEffect, useState } from "react";

const smallLogo = "images/ehlogo-transparent.svg";

function scrollCheckToNavbarLinkGlow() {
  const navbarLinks = document.querySelectorAll(".app__navbar--links li a");

  if (window.scrollY > 0) {
    navbarLinks.forEach((link) => {
      link.classList.add("scrolled");
    });
  } else {
    navbarLinks.forEach((link) => {
      link.classList.remove("scrolled");
    });
  }
}

const Navbar = () => {
  const handleLogoClick = () => {
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollCheckToNavbarLinkGlow);
    return () => {
      document.removeEventListener("scroll", scrollCheckToNavbarLinkGlow);
    };
  }, []);

  return (
    <nav className="app__navbar">
      <div
        className="app__navbar--logo pointer-cursor"
        onClick={handleLogoClick}
      >
        <img src={smallLogo} alt="logo" />
        <div className="app__navbar-letter">
          <div className="app__navbar-letter__container">
            <div className="app__navbar-letter__line">
              <div className="app__navbar-letter__line--vertical"></div>
              <div className="app__navbar-letter__line--horizontal"></div>
              <div className="app__navbar-letter__line--k-vertical"></div>
              <div className="app__navbar-letter__line--k-up"></div>
              <div className="app__navbar-letter__line--k-down"></div>
            </div>
          </div>
        </div>
      </div>
      <ul className="app__navbar--links" id="navbarWideLinks">
        {links.map((link, index) => (
          <li
            className="app__flex p--text pointer-cursor"
            key={`navbar-link-${index + 1}`}
          >
            <div className="pointer-cursor" />
            <a
              href={`${link.anchor}`}
              target={link?.target === "_blank" ? "_blank" : "_self"}
              rel="noreferrer"
              className="pointer-cursor"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <Hamburger links={links} direction={"toleft"} />
      <Toggle />
    </nav>
  );
};

export default Navbar;
