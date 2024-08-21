import { useEffect, useRef, useState } from "react";
import "./SignIn.css";
import { addUser, check_username } from "../../APIService";
import { IUser } from "../../types";

import { Navigate, useNavigate } from "react-router";
import { log } from "console";

const SignIn = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [isUserNameValid, setIsUserNameValid] = useState<boolean>(false);
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  function checkPassword(password: string) {
    let isUpperCase: boolean = false;
    let isSpecialChar: boolean = false;
    let isNumber: boolean = false;
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let i = 0;

    while (i < password.length && !(isUpperCase && isSpecialChar && isNumber)) {
      const char = password[i];

      if (specialChars.test(char)) {
        isSpecialChar = true;
      }
      if ("A" <= char && char <= "Z") {
        isUpperCase = true;
      }
      if (/\d/.test(char)) {
        isNumber = true;
      }
      i++;
    }

    return isUpperCase && isSpecialChar && isNumber ? true : false;
  }

  function handlePassword(e: any) {
    const password: string = e.target.value.toString();
    const passwordInputClass = document.getElementById("password");
    if (checkPassword(password) && passwordInputClass) {
      setIsPasswordValid(true);
      setPassword(password);
      passwordInputClass.style.border = "0.15rem solid green";
    } else if (passwordInputClass) {
      setIsPasswordValid(false);
      passwordInputClass.style.border = "0.15rem solid red";
    }
  }
  function handleUsername(e: any) {
    const username: string = e.target.value.toString();
    const usernameInputClass = document.getElementById("username");
    if (username.length < 4 && usernameInputClass) {
      setIsUserNameValid(false);
      usernameInputClass.style.border = "0.15rem solid red";
    } else if (usernameInputClass) {
      setIsUserNameValid(true);
      setUserName(username);
      usernameInputClass.style.border = "0.15rem solid green";
    }
  }
  async function handleSubmit() {
    const user: IUser = { user_name: userName, password: password };

    if ((await check_username(userName)) === false) {
      try {
        await addUser(user);
        window.alert("User added successfully!");
        navigate("/login");
      } catch (error: any) {
        window.alert("Failed to add user. Please try again.");
      }
    } else {
      window.alert("Username is taken. Please try another one.");
    }
  }

  useEffect(() => {
    function handleDisabled() {
      if (submitBtnRef.current) {
        if (isPasswordValid && isUserNameValid) {
          submitBtnRef.current.disabled = false;
        } else {
          submitBtnRef.current.disabled = true;
        }
      }
    }
    handleDisabled();
  }, [isPasswordValid, isUserNameValid]);
  return (
    <div className="mt-16 flex justify-center items-center flex-col">
      <h1 className="mb-16 sign-in-title">Sign in to the best diary site!</h1>

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
          type="password"
          placeholder="Enter Password"
          onChange={handlePassword}
        ></input>

        <button
          id="submit"
          className="submit"
          ref={submitBtnRef}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default SignIn;
