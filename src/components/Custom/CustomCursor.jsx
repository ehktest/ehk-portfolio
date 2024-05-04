import { useEffect, useState } from "react";
import { CustomCursorScript, MouseMoveEvent, CursorCheck } from "../../scripts";
import "./customCursor.scss";
import { GLOBAL_VARIABLES } from "../../constants";

const CustomCursor = () => {
  const BREAKPOINT = GLOBAL_VARIABLES.CUSTOM_CURSOR_BREAKPOINT;
  const [showCursor, setShowCursor] = useState(window.innerWidth > BREAKPOINT);

  useEffect(() => {
    const handleResize = () => {
      setShowCursor(window.innerWidth > BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);

    // Scripts
    // CustomCursorScript'i yalnızca showCursor durumu true ise çağır
    if (showCursor) {
      CustomCursorScript();
    }

    // Body'e 'cursor-none' class'i ekle
    document.body.classList.add("cursor-none");

    // componentWillUnmount ile class'i kaldır
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove("cursor-none");
      document.removeEventListener("mousemove", MouseMoveEvent);
      document.removeEventListener("mousemove", CursorCheck);
      document.removeEventListener("scroll", CursorCheck);
    };
  }, [showCursor]);

  if (!showCursor) return null;

  return (
    <div id="cursorWrapper">
      <div id="cursor"></div>;
    </div>
  );
};

export default CustomCursor;
