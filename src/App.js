//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/home";
import Layout from "./layout";
import Profile from "./Pages/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/main" element={<Layout/>}/>
        <Route path="/main/:id" element={<Profile/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
