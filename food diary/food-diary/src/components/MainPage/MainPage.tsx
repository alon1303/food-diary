import { useAppSelector } from "../../Redux/hooks";
import { useEffect, useState } from "react";

const MainPage = () => {
  const username: string = useAppSelector(
    (state) => state.user.value.user_name
  );
  const [welcomeText, setWelcomeText] = useState<string>("");
  function handleTitleText() {
    if (username === "") {
      setWelcomeText("");
    } else {
      setWelcomeText(`Hey ${username}`);
    }
  }
  useEffect(() => {
    handleTitleText();
  }, [username]);
  return (
    <div className="main-page">
      <h1>{welcomeText}</h1>
      <h1>Welcome to the best diary site!</h1>
    </div>
  );
};
export default MainPage;
