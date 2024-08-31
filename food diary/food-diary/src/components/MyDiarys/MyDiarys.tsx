import { useState, useEffect, useRef } from "react";
import AddDiary from "../AddDiary/AddDiary";
import "./MyDiarys.css";
import { IDiary } from "../../types";
import { deleteDiary, getDiarysByUserId } from "../../APIService";
import { useAppSelector } from "../../Redux/hooks";
import CircularProgress from "@mui/material/CircularProgress";
import { DiaryIcon2, AddSvg, DeleteIcon } from "../../assets/svgs/svgs";
import { setDiaryIdLocalAndStore } from "../../Redux/store";
import { useNavigate } from "react-router";
import { log } from "console";
const MyDiarys = () => {
  const [diarys, setDiarys] = useState<IDiary[]>([]);
  const userId = useAppSelector((state) => state.user.value._id);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const loadingIconRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate()
  function handleAddDiary() {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.style.display = "flex";
    }
  }
  async function handleDelete(e: React.MouseEvent<SVGSVGElement, MouseEvent>){
    
    
    const diaryId = e.currentTarget.parentElement ? e.currentTarget.parentElement.id: ""
    if(await deleteDiary(diaryId)){
      window.location.reload()
    }else window.alert("error in deleting diary!")

  }
  function handleDiaryClick(e:React.MouseEvent<HTMLDivElement, MouseEvent>){
    const diaryId = e.currentTarget.id
    
    
    setDiaryIdLocalAndStore(diaryId)
    navigate("/pages")
  }
  useEffect(() => {
    async function loadDiarys() {
      if (userId !== undefined) {
        const diarys_res = await getDiarysByUserId(userId);
        if (diarys_res !== undefined) {       
          
          
          setDiarys(diarys_res);
          setIsLoading(false);
        }
      }
    }
    loadDiarys();
  }, []);

  useEffect(() => {
    if (loadingIconRef.current) {
      loadingIconRef.current.style.display = isLoading ? "block" : "none";
    }
  }, [isLoading]);
  return (
    <div className="diarys">
      {diarys.map((diary) => (
                
        
        <div id={diary._id} className="diary-btn" key={diary._id} onClick={handleDiaryClick}>

          <DiaryIcon2 className="diary-icon2 ml-3" />

          <span className="diary-name ">{diary.name}</span>
          
          <DeleteIcon className="delete-icon" onClick={handleDelete}/>
        </div>
      ))}
      <div ref={loadingIconRef} className="loading-icon">
        <CircularProgress color="inherit" />
      </div>
      <div
        onClick={handleAddDiary}
        className="diary-btn-add grid grid-ratio items-center"
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
