import { useEffect, useState } from "react";
import "./AddDiary.css";
import addDiary from "../../APIService/APIService";
import Diary from "../../types/types";
import CloseBtn from "../../assets/svgs/close-btn";

const AddDiary = () => {
  const [format, setFormat] = useState<string>("Choose Format");
  const [diaryName, setDiaryName] = useState<string>("");

  function handleSubmit() {
    if (format === "Choose Format" || diaryName === "") {
      window.alert("fill in the form correctly");
    } else {
      const diary:Diary = {
        name:diaryName,
        format:format,
        userName:"alon1303"

      }
      addDiary();
    }
  }
  function handleFormat(e: any) {
    setFormat(e.currentTarget.value);
  }
  function handleCloseModal(){
    const modal = document.getElementById("modal")
    if(modal){
        modal.style.display = "none"
    }
  }
  return (
    <div
      id="modal"
      className="modal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
        <div className="close-btn-container">
          <CloseBtn onClick={handleCloseModal}></CloseBtn>
        </div>
      <div className="modal-content">
        
        <input
          className="input"
          placeholder="Name Of Your Diary"
          onChange={(e) => {
            setDiaryName(e.target.value);
          }}
        ></input>

        <div className="dropdown">
          <span>{format}</span>
          <div className="dropdown-content">
            <button value={"food diary"} className="btn" onClick={handleFormat}>
              Food Diary
            </button>
          </div>
        </div>

        <input
          placeholder="Submit"
          type="submit"
          className="submit"
          onClick={handleSubmit}
        ></input>
      </div>
    </div>
  );
};
export default AddDiary;
