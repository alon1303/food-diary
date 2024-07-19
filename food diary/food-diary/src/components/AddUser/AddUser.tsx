import { useState } from "react";
import "./AddUser.css";
import { log } from "console";

const AddUser = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function isPasswordValid(password: string) {
    let isUpperCase: boolean = false
    let isSpecialChar: boolean = false
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    password.split('').map((char) => {
      if (specialChars.test(char)) {
        isSpecialChar = true
      }
      if (char === char.toUpperCase()) {
        isUpperCase = true
      }
    })
    return (isUpperCase && isSpecialChar) ? true : false
  }
  function handlePassword(e: any) {
    const password: string = e.target.value.toString()
    const passwordInputClass = document.getElementById("password")
    if (isPasswordValid(password) && passwordInputClass) {
      setPassword(password)
      passwordInputClass.style.border = "0.15rem solid green";
    } else if (passwordInputClass) {
      passwordInputClass.style.border = "0.15rem solid red";
    }
  }
  function handleSubmit() { }
  return (
    <div className="add-user-container">
      <input
        className="input"
        placeholder="Enter User Name"
        onChange={(e) => setUserName(e.target.value)}
      ></input>

      <input
        id="password"
        className="input"
        placeholder="Enter Password"
        onChange={handlePassword}
      ></input>

      <input
        placeholder="Submit"
        type="submit"
        className="submit"
        onSubmit={handleSubmit}
      ></input>
    </div>
  );
};
export default AddUser;
