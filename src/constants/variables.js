const rootStyle = window.getComputedStyle(document.documentElement);
const customCursorBreakpoint = parseInt(
  rootStyle.getPropertyValue("--cursor-breakpoint").trim().replace("px", ""),
  10
);

const GLOBAL_VARIABLES = {
  CUSTOM_CURSOR_BREAKPOINT: customCursorBreakpoint,
};

export default GLOBAL_VARIABLES;
