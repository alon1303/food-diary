import { useEffect, useState } from "react";
import "./AddDiary.css";
import { addDiary } from "../../APIService";
import {IDiary} from "../../types/types";
import CloseBtn from "../../assets/svgs/close-btn";
import { useAppSelector } from "../../Redux/hooks";

const AddDiary = () => {
  const [format, setFormat] = useState<string>("Choose Format");
  const [diaryName, setDiaryName] = useState<string>("");
  const userId = useAppSelector(state=> state.user.value._id)
  const spanValue: string = "Food Diary"
  async function handleSubmit() {
    if (format === "Choose Format" || diaryName === "") {
      window.alert("fill in the form correctly");
    } else if(userId){
      const diary: IDiary = {
        name: diaryName,
        format: format,
        user_id: userId
      }
      if(await addDiary(diary)){
        window.location.reload()
      }
      
                                                                                                                                                                                                 
    }
  }
  function handleFormat(e: any) {
    setFormat(e.currentTarget.value);
  }
  function handleCloseModal() {
    const modal = document.getElementById("modal")
    if (modal) {
      modal.style.display = "none"
      setFormat("Choose Format")
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
            <button value={spanValue} className="btn" onClick={handleFormat}>
              <span>
                {spanValue}
              </span>

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