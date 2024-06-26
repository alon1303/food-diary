import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="App">
        
        <Routes>
          <Route path="/" element={MainPage()}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
