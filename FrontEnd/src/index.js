import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TopNavbar from './Components/Top Nav Bar/top_navbar';
import BottomNavbar from './Components/Bottom Nav Bar/bottom_navbar';
import logo from './Components/logo_transparent.png';
import App from './App';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

const current = new Date().toLocaleString();

ReactDOM.render(
    <React.StrictMode>
        <Router>
        <header>
            <div>
                <Link to='/' style={{display: 'inline-block'}}>
                    <img src={logo} alt="NUSPlanner"/>
                </Link>
                <TopNavbar/>
            </div>
        </header>
        <App />
        <footer>
            <div>
                <BottomNavbar />
                <p className="info">
                <h4>Data checked correct as of {current}.</h4>
                <h4>This website is created as part of a CS50x Final Project. Inspired from NUSMods and Edurec's What If Report.</h4>
                <h4>Copyright {'\u00A9'} 2022 - Present. Telegram @yusiang_seah for any info.</h4>
                </p>
            </div>
        </footer>
        </Router>
    </React.StrictMode> 
    
    ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
