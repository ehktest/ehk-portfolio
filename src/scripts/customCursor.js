export function checkCursorElements() {
  const cursorElements = document.querySelectorAll(".cursorElement");
  cursorElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (
      rect.top < 0 ||
      rect.left < 0 ||
      rect.bottom > window.innerHeight ||
      rect.right > window.innerWidth
    ) {
      element.style.display = "none"; // ya da element.style.visibility = "hidden";
    } else {
      element.style.display = "block"; // ya da element.style.visibility = "visible";
    }
  });
}

function hasClassInAncestry(element, className) {
  let currentElement = element;
  while (currentElement) {
    if (currentElement?.classList.contains(className)) {
      return true;
    }
    currentElement = currentElement.parentElement;
  }
  return false;
}

export function onMouseMove(e) {
  let cursorWrapper = document.getElementById("cursorWrapper");
  let body = document.body;

  // move cursor
  cursorWrapper.style.top = e.clientY + "px";
  cursorWrapper.style.left = e.clientX + "px";

  // switching custom cursor with default pointer
  if (hasClassInAncestry(e.target, "pointer-cursor")) {
    cursorWrapper.style.visibility = "hidden";
  } else {
    cursorWrapper.style.visibility = "visible";
  }

  // add elements to body
  let cursorElement = document.createElement("div");
  cursorElement.className = "cursorElement";
  body.prepend(cursorElement);

  // move elements randomly across x and y axis
  cursorElement.style.left = e.pageX + "px";
  cursorElement.style.top = e.pageY - 16 + "px";

  setTimeout(function () {
    let trace = document.querySelectorAll(".cursorElement")[0];
    let directionX = Math.random() < 0.5 ? -1 : 1;
    let directionY = Math.random() < 0.5 ? -1 : 1;

    trace.style.left =
      parseInt(trace.style.left) - directionX * (Math.random() * 200) + "px";
    trace.style.top =
      parseInt(trace.style.top) - directionY * (Math.random() * 200) + "px";

    trace.style.opacity = 0;
    trace.style.transform = "scale(0.25)";
    cursorElement.appendChild(document.createTextNode("HK"));

    // remove element
    setTimeout(() => {
      cursorElement.remove();
    }, 100);
  }, 100);
}

export default function customCursor() {
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mousemove", checkCursorElements);
  document.addEventListener("scroll", checkCursorElements);

  // Temizleme işlevi
  return () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mousemove", checkCursorElements);
    document.removeEventListener("scroll", checkCursorElements);
  };
}
