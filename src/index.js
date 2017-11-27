import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Logo } from "./components/Logo";
import { TextAreaLeft } from "./components/TextAreaLeft";
import { TextAreaRight } from "./components/TextAreaRight";
import { ButtonGroup } from "./components/ButtonGroup";
const marked = require('marked');
class HeaderComp extends React.Component {

    render() {
         let paragraphs = {
            heading: '# this is an H1 tag',
            headingTwo: '## this is an H2 tag',
            italics: '_this is italics_',
            bold: '__this is bold text__',
            strike: '~~strikethrough uses two~~'
         }
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
               
               
                <TextAreaLeft ref="test" heading={paragraphs.heading} headingTwo={paragraphs.headingTwo} italics={paragraphs.italics} bold="paragraphs.bold"
                    strike={paragraphs.strike}/>
                <TextAreaRight/>
                
            </div>
        );
        
    }
    
}

render(<HeaderComp/>, window.document.getElementById("headerComp"));


