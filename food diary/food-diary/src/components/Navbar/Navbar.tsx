import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {DiarySvg,BurgerSvg2} from "../../assets/svgs/svgs";
import { useAppSelector } from "../../Redux/hooks";
import { removeUserFromLocalAndStore } from "../../Redux/store";
import "./Navbar.css";

const Navbar = () => {
  const isLogged = useAppSelector((state) => state.user.value.is_logged);
  const signInRef = useRef<HTMLAnchorElement>(null);
  const loginRef = useRef<HTMLAnchorElement>(null);
  const diarysRef = useRef<HTMLAnchorElement>(null);
  const logoutRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate()

  function handleLinks() {
    if (
      signInRef.current &&
      loginRef.current &&
      logoutRef.current &&
      diarysRef.current
    ) {
      if (isLogged) {
        signInRef.current.style.display = "none";
        loginRef.current.style.display = "none";
        logoutRef.current.style.display = "flex";
        diarysRef.current.style.display = "flex"
      } else {
        signInRef.current.style.display = "flex";
        loginRef.current.style.display = "flex";
        logoutRef.current.style.display = "none";
        diarysRef.current.style.display = "none"
      }
    }
  }
  function handleLogOut() {
    removeUserFromLocalAndStore();
    navigate('/')
  }
  useEffect(() => {
    handleLinks();
  }, [isLogged]);
  return (
    <div className="nav-bar2">
      <Link className="link" to={"/"}>
        <BurgerSvg2 />

        <span className="span">Food Diary</span>
      </Link>
      <Link ref={diarysRef} className="link " to={"/my-diarys"}>
        <DiarySvg />

        <span className="span">My Diarys</span>
      </Link>
      <Link ref={loginRef} className="link login" to={"/login"}>
        <span className="span">Login</span>
      </Link>

      <Link ref={signInRef} className=" link sign-in" to={"/sign-in"}>
        <span className="span">Sign in</span>
      </Link>
      <button ref={logoutRef} className=" link logout" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
export default Navbar;
