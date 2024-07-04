import AddSvg from "../../assets/svgs/add";
import "./MyDiarys.css";
const MyDiarys = () => {
  return (
    <div className="diarys">
      <div className="flex diary-btn justify-center">
        <span className="diary-name ">Food tracking</span>
      </div>
      <div className="grid grid-ratio diary-btn items-center">
        <div className="add-svg">
          <AddSvg />
        </div>
        <span className="span1 ml-5">Add Diary</span>
      </div>
    </div>
  );
};
export default MyDiarys;
