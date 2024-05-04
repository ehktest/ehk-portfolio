import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import CustomCursor from "../components/Custom/CustomCursor";
import { CustomCursorShow, HandleResize } from "../scripts";
import { Box } from "@mui/material";
import { About, Footer, Header, Skills, Work, NotFound } from "../container";
import { Navbar } from "../components";
import { useEffect, useState } from "react";

const AppLayout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cursorOnclickElements, setCursorOnclickElements] = useState([]);
  const [showCustomCursor, setShowCustomCursor] = useState(true);

  useEffect(() => {
    setCursorOnclickElements(
      Array.from(document.querySelectorAll(".pointer-cursor"))
    );
  }, []);

  useEffect(() => {
    const resizeWrapper = () => {
      HandleResize(setWindowWidth);
    };

    CustomCursorShow(
      resizeWrapper,
      cursorOnclickElements,
      windowWidth,
      setWindowWidth,
      setShowCustomCursor
    );

    return () => {
      window.removeEventListener("resize", resizeWrapper);
    };
  }, [windowWidth, cursorOnclickElements]);

  return (
    <>
      <div id="app__cursor-zone" className="app__cursor-zone">
        {showCustomCursor && <CustomCursor />}
        <div className="app">
          <Navbar />
          <Header />
          <About />
          <Work />
          <Skills />
          <Footer />
        </div>
      </div>
    </>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
