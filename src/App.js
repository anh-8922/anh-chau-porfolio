//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/home";
import Profile from "./Pages/profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./Pages/project";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/profile" element={<Profile/>}/>  
          <Route path="/projects" element={<Projects/>}/>  
        </Routes>
      </BrowserRouter>
  );
}

export default App;
