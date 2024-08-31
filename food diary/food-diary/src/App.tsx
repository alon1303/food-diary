import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import MainPage from "./components/MainPage/MainPage";
import MyDiarys from "./components/MyDiarys/MyDiarys";
import SignIn from "./components/SignIn/SignIn";
import Login from "./components/Login/Login";
import Pages from "./components/Pages/Pages";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={MainPage()}></Route>
        <Route path="/my-diarys" element={MyDiarys()}></Route>
        <Route path="/sign-in" element={SignIn()}></Route>
        <Route path="/login" element={Login()}></Route>
        <Route path="/pages" element={Pages()}></Route>
      </Routes>
    </div>
  );
}

export default App;
