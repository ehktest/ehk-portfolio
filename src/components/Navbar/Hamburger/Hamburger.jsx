import { useEffect, useRef, useState } from "react";
import {
  HamburgerMenu,
  HamburgerMenuClickHandle,
  WrapperSizeSetter,
} from "../../../scripts";
import "./Hamburger.scss";

const Hamburger = ({ links, direction }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const alignToRightStyle = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexGrow: 2,
    marginRight: "1rem",
  };

  const alignToLeftStyle = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexGrow: 2,
    marginLeft: "1rem",
  };

  const navStyle =
    direction === "toleft" ? alignToRightStyle : alignToLeftStyle;

  const navID =
    direction === "toleft" ? "hamburgerNavToLeft" : "hamburgerNavDefault";

  function closeMenu() {
    document.getElementById("hamburgerMenuCheckbox").checked = false;
    setIsMenuVisible(false);
  }

  function toggleMenuVisibility(e) {
    let checkbox = document.getElementById("hamburgerMenuCheckbox");

    if (checkbox.checked) {
      setIsMenuVisible(true);
    } else {
      closeMenu();
    }
  }

  function handleMenuClick(event) {
    let menu = document.getElementById("hamburgerMenu");
    let checkbox = document.getElementById("hamburgerMenuCheckbox");

    if (menu) {
      if (
        !menu.contains(event.target) &&
        !checkbox.contains(event.target) &&
        checkbox.checked
      ) {
        checkbox.checked = false;
        setIsMenuVisible(false);
      }
    }
  }

  useEffect(() => {
    const wrapperHamburgerMenuClickHandle = (event) => {
      HamburgerMenuClickHandle(event, setIsMenuVisible);
    };

    document.body.addEventListener("click", wrapperHamburgerMenuClickHandle);

    return () => {
      document.body.removeEventListener(
        "click",
        wrapperHamburgerMenuClickHandle
      );
    };
  }, []);

  useEffect(() => {
    let checkbox = document.getElementById("hamburgerMenuCheckbox");

    if (checkbox.checked) {
      WrapperSizeSetter(true);
    } else {
      WrapperSizeSetter(false);
    }
  }, [isMenuVisible]);

  return (
    <nav role="navigation" id={navID} style={navStyle}>
      <div
        id="hamburgerMenuToggle"
        onClick={(e) => {
          handleMenuClick(e);
        }}
        style={{}}
      >
        <input
          type="checkbox"
          className="pointer-cursor"
          id="hamburgerMenuCheckbox"
          onClick={toggleMenuVisibility}
        />

        <span></span>
        <span></span>
        <span></span>

        {isMenuVisible && (
          <div id="hamburgerMenuWrapper">
            <ul id="hamburgerMenu">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.anchor}
                  target={link?.target === "_blank" ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="pointer-cursor"
                  onClick={closeMenu}
                >
                  {link.label.toUpperCase()}
                </a>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Hamburger;
