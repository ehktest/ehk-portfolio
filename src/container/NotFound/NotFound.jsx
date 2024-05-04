import "./NotFound.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>HK - Page Not Found</title>
      </Helmet>

      <div className="container">
        <div className="container__image">
          <img
            src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
            alt="not_found_image"
            className="h-full"
          />
        </div>
      </div>
      <div className="container">
        <div className="container__info">
          <p>The page you are looking for not available!</p>
          <div>
            <Link to="/">Go to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
