import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
// import { images } from "../../constants";
import useProfileCall from "../../hooks/useProfileCall";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { urlFor } from "../../client";

const About = () => {
  const { getAboutData } = useProfileCall();
  const { loading, about } = useSelector((state) => state.profile);

  useEffect(() => {
    getAboutData();
  }, []);

  if (loading) {
    return (
      <div style={{ margin: "auto", padding: "1rem" }}>
        <AiOutlineLoading3Quarters />
      </div>
    );
  }

  return (
    <>
      <h2 className="head--text">
        Developer <span>in progress</span>
      </h2>

      <div className="app__profiles">
        {about.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={`${about.title}-${index}`}
          >
            {/* <img src={about.imgUrl} alt={about.title} /> */}
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold--text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p--text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  // About,
  "about",
  "app__oddsbg"
);
