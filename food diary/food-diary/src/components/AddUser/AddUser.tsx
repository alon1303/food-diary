import { useEffect, useState } from "react";
import "./AddUser.css";
import { addUser, check_username } from "../../APIService";
import { IUser } from "../../types";
import { log } from "console";

const AddUser = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [isUserNameValid, setIsUserNameValid] = useState<boolean>(false);
  function checkPassword(password: string) {
    let isUpperCase: boolean = false;
    let isSpecialChar: boolean = false;
    let isNumber:boolean = false;
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let i = 0
    while(i < password.length && !(isPasswordValid && isUserNameValid && isNumber)){
      const char = password[i]
      if (specialChars.test(char)) {
        isSpecialChar = true;
      }
      if ('A' <= char && char <= 'Z') {
            
        isUpperCase = true;
      }
      if(/\d/.test(char)){
        isNumber = true
      }
      i++
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
    const user: IUser = { userName: userName, Password: password };
    console.log("submit");

    if (await check_username(userName)) {
      try {
        await addUser(user);
        window.alert("User added successfully!");
      } catch (error: any) {
        window.alert("Failed to add user. Please try again.");
      }
    } else {
      window.alert("Username is taken. Please try another one.");
    }
  }
  useEffect(()=>{
    const submitBtn = document.getElementById("submit") as HTMLButtonElement
    console.log("useEffect");
    
    if(isPasswordValid && isUserNameValid && submitBtn){
      submitBtn.disabled = false
    }else{
      submitBtn.disabled = true
    }
  },[isPasswordValid, isUserNameValid])
  return (
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

      <button id="submit" className="submit" onClick={handleSubmit} disabled={true}>
        Submit
      </button>
    </div>
  );
};
export default AddUser;
