import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import MyDiarys from "./components/MyDiarys/MyDiarys";


function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="App">
        
        <Routes>
          <Route path="/" element={MainPage()}></Route>
          <Route path="/my-diarys" element={MyDiarys()}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
