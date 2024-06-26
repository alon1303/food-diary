import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import "../../assets/burger.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-bar bg-light">
      <img src="../../assets/burger.png" />
      <Link className="link" to={"/"}>
        <span className="span">Food Diary</span>
      </Link>
    </div>
  );
};
export default Navbar;
