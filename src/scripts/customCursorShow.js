import { GLOBAL_VARIABLES } from "../constants";

const BREAKPOINT = GLOBAL_VARIABLES.CUSTOM_CURSOR_BREAKPOINT;

export function customCursorShow(
  handleResizeWrapper,
  cursorOnclickElements,
  windowWidth,
  windowWidthSetter,
  showCustomCursor
) {
  const cursorZone = document.querySelector("#app__cursor-zone");

  window.addEventListener("resize", handleResizeWrapper);

  if (windowWidth < BREAKPOINT) {
    cursorOnclickElements.forEach((el) => {
      if (el.id !== "hamburgerMenuCheckbox") {
        if (windowWidth < BREAKPOINT) {
          el.classList.remove("pointer-cursor");
        } else {
          el.classList.add("pointer-cursor");
        }
      }
    });
    showCustomCursor(false);
    cursorZone?.classList.remove("app__cursor-zone");
    document.body.classList.remove("cursor-none");
  } else {
    cursorOnclickElements.forEach((el) => {
      el.classList.add("pointer-cursor");
    });
    showCustomCursor(true);
    cursorZone?.classList.add("app__cursor-zone");
    document.body.classList.add("cursor-none");
  }
}

export function handleResize(windowWidthSetter) {
  windowWidthSetter(window.innerWidth);
}
