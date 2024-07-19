import { useState } from "react";
import "./AddUser.css";

const AddUser = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  function handlePassword(e:any){

  }
  function handleSubmit() {}
  return (
    <div className="add-user-container">
      <input
        className="input"
        placeholder="Enter User Name"
        onChange={(e) => setUserName(e.target.value)}
      ></input>

      <input
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
