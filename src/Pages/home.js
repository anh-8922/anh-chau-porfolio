import React from 'react';
import '../StyleSheets/styles.css';
import gitdark from "./gitdark.png";
import browser from './browser.png';


export default function Homepage() {
    return(
        <div id='home' style={{backgroundColor: "#48343D"}}>
            <div id='git'><a href='https://github.com/anh-8922' target='_blank'><img id="git-link" src={gitdark}/></a></div>
            <div id='name'>
                <img src={browser} style={{width: "7rem"}}/>
                <h1>Anh Kim Chau</h1>
                <h2>Web Developer</h2>
                <button>My Profile</button>
            </div>
            
        </div>
    )
}