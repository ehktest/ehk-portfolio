import "./Togle.scss";
import Sun from "../../assets/svg/sun.svg";
import Moon from "../../assets/svg/moon.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/themeSlice";

const Toggle = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      className="t"
      id="themeToggle"
      style={{ backgroundColor: !isDark && "#444" }}
    >
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button pointer-cursor"
        onClick={handleClick}
        style={{
          right: isDark ? 25 : 0,
          backgroundColor: isDark && "#700",
        }}
      ></div>
    </div>
  );
};

export default Toggle;
