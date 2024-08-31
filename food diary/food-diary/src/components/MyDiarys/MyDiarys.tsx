import { useState, useEffect, useRef } from "react";
import AddSvg from "../../assets/svgs/add";
import AddDiary from "../AddDiary/AddDiary";
import "./MyDiarys.css";
import { IDiary } from "../../types";
import { getDiarysByUserId } from "../../APIService";
import { useAppSelector } from "../../Redux/hooks";
import CircularProgress from '@mui/material/CircularProgress';
import DiaryIcon2 from "../../assets/svgs/diary2";
const MyDiarys = () => {
  const [diarys, setDiarys] = useState<IDiary[]>([]);
  const userId = useAppSelector((state) => state.user.value._id);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const loadingIconRef = useRef<HTMLDivElement>(null);
  function handleAddDiary() {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.style.display = "flex";
    }
  }
  useEffect(() => {
    async function loadDiarys() {
      if (userId !== undefined) {
        const diarys_res = await getDiarysByUserId(userId);
        if (diarys_res !== undefined) {
          setDiarys(diarys_res);
          setIsLoading(false)
        }
      }
    }
    loadDiarys();
  }, []);
  useEffect(()=>{
    if(loadingIconRef.current){
      loadingIconRef.current.style.display = isLoading ? "block" : "none";      
    }
  },[isLoading])
  return (
    <div className="diarys">
      {diarys.map((diary) => (
        <div id={diary._Id} className="diary-btn" key={diary._Id}>
          <DiaryIcon2 className="diary-icon2 ml-3"/>
          
          <span className="diary-name ">Diary: {diary.name}</span>
          
        </div>
      ))}
      <div ref={loadingIconRef} className="loading-icon">
        <CircularProgress  color="inherit"/>
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
