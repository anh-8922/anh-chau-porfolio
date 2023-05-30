import React from 'react';
import '../StyleSheets/page.css';
import gitdark from "../Assets/gitdark.png";
import browser from '../Assets/browser.png';
import {Routes, Route, useNavigate } from 'react-router-dom';
import Profile from './profile';

export default function Homepage() {
    const navigate = useNavigate();
    const navigateToPage = () => {
        navigate('/profile')
    }
    return(
        <div id='home' style={{backgroundColor: "#48343D"}}>
            <div id='git'><a href='https://github.com/anh-8922' target='_blank'><img id="git-link" src={gitdark}/></a></div>
            <div id='name'>
                <img src={browser} style={{width: "7rem"}}/>
                <h1>Anh Kim Chau</h1>
                <h2>Web Developer</h2>
                <button onClick={navigateToPage}>My Profile</button>
            </div>
            <Routes>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    )
}