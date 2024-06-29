import "./Navbar.css";

import "../../assets/burger.png";
import { Link } from "react-router-dom";
import BurgerSvg2 from "../../assets/svgs/burger2";
import DiarySvg from "../../assets/svgs/diary";
const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link className="link" to={"/"}>
        <BurgerSvg2 />

        <span className="span">Food Diary</span>
      </Link>
      <Link className="link ml-7" to={"/my-diarys"}>
        <DiarySvg />

        <span className="span">My Diarys</span>
      </Link>
    </div>
  );
};
export default Navbar;
