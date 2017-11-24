import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Logo } from "./components/Logo";
class HeaderComp extends React.Component {

    render() {
        return (
            <div className="main">
                <Logo/>
                <Home/>
            <div className="container">
                
             
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                       
                    </div>
                </div>
            
            </div>
        );
        
    }
    
}

render(<HeaderComp/>, window.document.getElementById("headerComp"));