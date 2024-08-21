import { useState, useEffect } from "react";
import AddSvg from "../../assets/svgs/add";
import AddDiary from "../AddDiary/AddDiary";
import "./MyDiarys.css";
import { IDiary } from "../../types";
import { getDiarysByUserId } from "../../APIService";
import { useAppSelector } from "../../Redux/hooks";
const MyDiarys = () => {
  const [diarys, setDiarys] = useState<IDiary[]>([]);
  const userId = useAppSelector((state) => state.user.value._id);
  function handleAddDiary() {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.style.display = "flex";
    }
  }
  useEffect(() => {
    async function updateDiarysState() {
      if (userId !== undefined) {
        const diarys_res = await getDiarysByUserId(userId)
        if (diarys_res !== undefined) {
          setDiarys(diarys_res)
        }
      }
    }
    updateDiarysState()
  }, []);

  return (
    <div className="diarys">
      <div className="diary-btn flex justify-center">
        <span className="diary-name ">Diary 1</span>
      </div>
      <div
        onClick={handleAddDiary}
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
