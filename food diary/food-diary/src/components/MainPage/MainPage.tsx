import { Link } from "react-router-dom";
import BurgerSvg2 from "../../assets/svgs/burger2";
import DiarySvg from "../../assets/svgs/diary";

const MainPage = () => {
  return (
    <div className="main-page">
      <Link to={'/my-diarys'}>
        <DiarySvg />
      </Link>
    </div>
  );
};
export default MainPage;
