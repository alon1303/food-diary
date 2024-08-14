import { useEffect ,useState} from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { setName } from "../../Redux/userSlice";
const MainPage = () => {
  const username = useAppSelector(state=>state.userName.value)
  
  
  return (
    <div className="main-page">
      <h1>Hey {username}</h1>
      <h1>Welcome to the best diary site!</h1>
    </div>
  );
};
export default MainPage;
