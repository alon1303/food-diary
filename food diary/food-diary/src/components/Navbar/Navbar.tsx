import "./Navbar.css";
import { Link, LinkProps } from "react-router-dom";
import BurgerSvg2 from "../../assets/svgs/burger2";
import DiarySvg from "../../assets/svgs/diary";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { useEffect, useRef } from "react";
import { setisLogged } from "../../Redux/loginSlice";
import { setName } from "../../Redux/userSlice";

const Navbar = () => {
  const isLogged = useAppSelector((state) => state.isLogged.value);
  const signInRef = useRef<HTMLAnchorElement>(null);
  const loginRef = useRef<HTMLAnchorElement>(null);
  const logoutRef = useRef<HTMLButtonElement>(null);
  const dispatch = useAppDispatch()
  function handleLinks() {
    if (signInRef.current && loginRef.current && logoutRef.current) {
      if (isLogged) {
        signInRef.current.style.display = "none";
        loginRef.current.style.display = "none";
        logoutRef.current.style.display = "flex";
      } else {
        signInRef.current.style.display = "flex";
        loginRef.current.style.display = "flex";
        logoutRef.current.style.display = "none";
      }
    }
  }
  function handleLogOut(){
    dispatch(setisLogged(false))
    dispatch(setName(""))
  }
  useEffect(() => {
    handleLinks()
  }, [isLogged]);
  return (
    <div className="nav-bar2">
      <Link className="link" to={"/"}>
        <BurgerSvg2 />

        <span className="span">Food Diary</span>
      </Link>
      <Link className="link " to={"/my-diarys"}>
        <DiarySvg />

        <span className="span">My Diarys</span>
      </Link>
      <Link ref={loginRef} className="link login" to={"/login"}>
        <span className="span">Login</span>
      </Link>

      <Link ref={signInRef} className=" link sign-in" to={"/sign-in"}>
        <span className="span">Sign in</span>
      </Link>
      <button ref={logoutRef} className=" link logout" onClick={handleLogOut}>Logout</button>
    </div>
  );
};
export default Navbar;
