//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/home";

import Profile from "./Pages/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/profile" element={<Profile/>}/>
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
