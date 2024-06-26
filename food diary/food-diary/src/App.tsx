import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import MyDiarys from "./components/MyDiarys/MyDiarys";


function App() {
  return (
    <BrowserRouter>
      
      <div className="App">
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={MainPage()}></Route>
          <Route path="/my-diarys" element={MyDiarys()}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
