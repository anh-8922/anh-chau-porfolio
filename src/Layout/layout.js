import React from 'react';
import git from '../Assets/git.png';
import '../StyleSheets/layoutstyle.css';
import Navigator from '../Components/Navigator';

export default function Layout({children}) {
    return(
        <>
            <div className='heading'>
                <div id='git'>
                    <a href='https://github.com/anh-8922' target='_blank'>
                        <img id="git-link" src={git}/>
                    </a>
                </div>
                <Navigator/>
            </div>
            <div className='main' style={{
                display: 'flex',
                justifyContent: 'center',
            }}>{children}</div>
        </>
    )
}