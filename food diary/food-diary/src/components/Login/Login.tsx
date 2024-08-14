import { useState } from "react";
import { login } from "../../APIService";
import { setName } from "../../Redux/userSlice";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../Redux/hooks";
import { setisLogged } from "../../Redux/loginSlice";
const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function handleUsername(e: any) {
    setUserName(e.target.value);
  }
  function handlePassword(e: any) {
    setPassword(e.target.value);
  }
  async function handleSubmit() {
    if ((await login(userName, password)) === true) {
      dispatch(setName(userName));
      dispatch(setisLogged(true));
      window.alert("Successfuly logged in!");
      navigate("/");
    } else {
      window.alert("Failed logging in try again!");
    }
  }
  return (
    <div className="mt-16 flex justify-center items-center flex-col">
      <h1 className="mb-16 sign-in-title">Login in to the best diary site!</h1>

      <div className="add-user-container">
        <input
          id="username"
          className="input"
          placeholder="Enter User Name"
          onChange={handleUsername}
        ></input>

        <input
          id="password"
          className="input"
          placeholder="Enter Password"
          onChange={handlePassword}
        ></input>

        <button id="submit" className="submit" onClick={handleSubmit}>
          Enter
        </button>
      </div>
    </div>
  );
};

export default Login;
