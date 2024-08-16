import { useState } from "react";
import { getUserId, login } from "../../APIService";
import { setUser } from "../../Redux/userSlice";
import { useNavigate } from "react-router";
import "./Login.css";
import { setUserLocalAndStore } from "../../Redux/store";
import { IUser } from "../../types";

const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  function handleUsername(e: any) {
    setUserName(e.target.value);
  }
  function handlePassword(e: any) {
    setPassword(e.target.value);
  }
  async function handleSubmit() {
    if ((await login(userName, password)) === true) {
      const userId = await getUserId(userName)
      const user:IUser = {
        user_name:userName,
        is_logged:true,
        _id:userId
      }
      setUserLocalAndStore(user)
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
