import { useState, useEffect } from "react";
import AddSvg from "../../assets/svgs/add";
import AddDiary from "../AddDiary/AddDiary";
import "./MyDiarys.css";
const MyDiarys = () => {
  
  function handleClick() {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.style.display = "flex";
      
    }
  }
  
  return (
    <div className="diarys">
      <div className="diary-btn flex justify-center">
        <span className="diary-name ">Diary 1</span>
      </div>
      <div
        onClick={handleClick}
        className="diary-btn grid grid-ratio items-center"
      >
        <div className="add-svg">
          <AddSvg />
        </div>

        <span className="span1 ml-5">Add Diary</span>
      </div>

      <AddDiary></AddDiary>
    </div>
  );
};
export default MyDiarys;
