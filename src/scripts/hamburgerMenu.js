export function hamburgerMenuClickHandle(event, setterFunc) {
  let themeToggle = document.getElementById("themeToggle");
  let menuToggle = document.getElementById("hamburgerMenuToggle");
  let menu = document.getElementById("hamburgerMenu");
  let checkbox = document.getElementById("hamburgerMenuCheckbox");

  if (menu) {
    if (
      !menu.contains(event.target) &&
      !menuToggle.contains(event.target) &&
      !themeToggle.contains(event.target) &&
      checkbox.checked
    ) {
      checkbox.checked = false;
      setterFunc(false);
    }
  }
}

export default function handleHamburgerMenuClick() {
  document.body.addEventListener("click", hamburgerMenuClickHandle);
}

// hamburgerMenu acildiginda wrapper'in width height'ini ul'ninkine esitleme
export function adjustWrapperSize(isMenuVisible) {
  let menu = document.getElementById("hamburgerMenu");
  let wrapper = document.getElementById("hamburgerMenuWrapper");

  if (menu && wrapper && isMenuVisible) {
    // wrapper.style.display = "visible";
    let menuWidth = menu.offsetWidth;
    let menuHeight = menu.offsetHeight;

    let computedStyle = window.getComputedStyle(menu);
    let marginTop = parseFloat(computedStyle.marginTop);

    wrapper.style.width = menuWidth + "px";
    wrapper.style.height = menuHeight + marginTop + 1 + "px";
  }
}
