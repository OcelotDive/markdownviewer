import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Logo } from "./components/Logo";
<<<<<<< HEAD
import { TextAreas } from "./components/TextAreas";

=======
import { TextAreaLeft } from "./components/TextAreaLeft";
import { TextAreaRight } from "./components/TextAreaRight";
import { ButtonGroup } from "./components/ButtonGroup";
>>>>>>> 24d13585cd0500e7fb184fae430966235e9dec98
const marked = require('marked');
class HeaderComp extends React.Component {

    render() {
         let paragraphs = {
<<<<<<< HEAD
          initial: '# this is an H1 tag' + "\n" + '## this is an H2 tag' + "\n" + '_this is italics_' + "\n" + '__this is bold text__' + "\n" + '~~strikethrough uses two tilde~~',
           val: 7
         }
         let helpText = {
             
             headings:  'HEADINGS' + "\n" + "\n" + '# heading = <h1>' + "\n" + '## heading = <h2>' + "\n" + '### heading = <h3>' + "\n" + "\n"
                        + 'TEXT' + "\n" + "\n" + '*italic*' +  "\n" + '**bold**' + "\n" + '***bold-italic***' + "\n" + '[link](http://example.com)' + "\n" + "\n" + 'LISTS'  + "\n" + "\n" + '* listItemOne' + "\n" + '* listItemTwo' + "\n" + ' ' + ' ' + ' ' + ' ' + ' ' + ' ' + '* listTwoSubItem' + "\n" + '* listItemThree' + "\n" + "\n" + 'STRIKETHROUGH' + "\n" + "\n" +'~~deleted word~~' + "\n" + "\n" + 'HIGHLIGHT' + "\n" + "\n" + '==highlight background=='
=======
            heading: '# this is an H1 tag',
            headingTwo: '## this is an H2 tag',
            italics: '_this is italics_',
            bold: '__this is bold text__',
            strike: '~~strikethrough uses two~~'
>>>>>>> 24d13585cd0500e7fb184fae430966235e9dec98
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
<<<<<<< HEAD
                <h2 className="markHeaderOne">Markdown</h2>
                <h2 className="markHeaderTwo">MarkUp</h2>
               
                <TextAreas initial={paragraphs.initial} headings={helpText.headings}/>
                
=======
               
               
                <TextAreaLeft ref="test" heading={paragraphs.heading} headingTwo={paragraphs.headingTwo} italics={paragraphs.italics} bold="paragraphs.bold"
                    strike={paragraphs.strike}/>
                <TextAreaRight/>
>>>>>>> 24d13585cd0500e7fb184fae430966235e9dec98
                
            </div>
        );
        
    }
    
}

render(<HeaderComp/>, window.document.getElementById("headerComp"));


