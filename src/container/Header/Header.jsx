import "./Header.scss";
import { AppWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { TypeAnimation } from "react-type-animation";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useProfileCall from "../../hooks/useProfileCall";
import { UrlDownload } from "../../components";
import { IoMdDownload } from "react-icons/io";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const { files } = useSelector((state) => state.profile);

  const { getFilesData } = useProfileCall();

  const { isDark } = useSelector((state) => state.theme);

  useEffect(() => {
    const home = document.getElementById("home");

    if (isDark) {
      home.style.background = 'url("../../assets/bgIMG_dark.png")';
    } else {
      home.style.background = 'url("../../assets/bgIMG.png")';
    }
  }, [isDark]);

  useEffect(() => {
    getFilesData();
  }, []);

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            {/* <span>👋</span> */}
            <img src={images.wave} alt="wave" />
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>

              {/* <h1 className="head--text">Huseyin</h1> */}
              <TypeAnimation
                sequence={["Huseyin", 2000, "Huseyin"]}
                wrapper="h1"
                speed={300}
                repeat={1}
                className="head--text header--text"
              />
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">IT Enthusiast</p>
          </div>

          {files.length ? (
            <div className="app__header-buttons app__flex">
              {files.map((file, index) => (
                <div
                  key={`header-button-${file.title}`}
                  className="app__header-buttons-item pointer-cursor"
                >
                  {/* Dosya bilgisi ve indirme linki için UrlDownload komponentini kullan */}
                  {/* { file: { _type: 'file', asset: { _type: 'reference', _ref: 'file-b48b3264209cc2cf70e673d3b03ba04c91a23859-pdf' } }, _createdAt: '2024-05-03T21:26:44Z', _rev: 'ttlVPsgzY6lnAW3QJYjCvT', _type: 'files', _id: '5d428ddf-c7b6-4b3f-822f-c4e2811a9f12', title: 'CV', _updatedAt: '2024-05-03T22:14:28Z' } */}
                  <div className="app__header-buttons-item-text">
                    <IoMdDownload />
                    <UrlDownload
                      fileRef={file.file.asset._ref}
                      fileTitle={file.title}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.node, images.react, images.django].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
