import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import MyDiarys from "./components/MyDiarys/MyDiarys";
import AddDiary from "./components/AddDiary/AddDiary";
import WriteDiary from "./components/WriteDiary/WriteDiary";
import SignIn from "./components/SignIn/SignIn";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={MainPage()}></Route>
        <Route path="/my-diarys" element={MyDiarys()}></Route>
        <Route path="/sign-in" element={SignIn()}></Route>
        <Route path="/login" element={Login()}></Route>
      </Routes>
    </div>
  );
}

export default App;
