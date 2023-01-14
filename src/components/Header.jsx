import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav-items-logo">
      <img
        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        alt="Github logo"
      />
      <Link to="/">
        <h1>GitHub Search</h1>
      </Link>
    </div>
  );
};

export default Header;
