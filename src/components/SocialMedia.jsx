import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div className="pointer-cursor">
        <a href="https://github.com/ehkarabas" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </div>
      <div className="pointer-cursor">
        <a
          href="https://www.linkedin.com/in/huseyinkarabas/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <div className="pointer-cursor">
        <a href="mailto:ehkarabas@gmail.com" target="_blank" rel="noreferrer">
          <AiOutlineMail />
        </a>
      </div>
      <div className="pointer-cursor">
        <a href="https://wa.me/+905321315454" target="_blank" rel="noreferrer">
          <AiOutlineWhatsApp />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
