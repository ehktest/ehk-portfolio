import "./NavigationDots.scss";
import { links } from "../constants";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {links.map((item, index) => (
        <a
          key={`navigation-dot-item-${index + 1}`}
          href={`${item.anchor}`}
          className={`app__navigation--dot pointer-cursor ${
            active === item.anchor.slice(1) ? "active-navDot" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
