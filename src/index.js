import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Logo } from "./components/Logo";
import { TextAreas } from "./components/TextAreas";


const marked = require('marked');
class HeaderComp extends React.Component {

    render() {
         let paragraphs = {

          initial: '# this is an H1 tag' + "\n" + '## this is an H2 tag' + "\n" + '_this is italics_' + "\n" + '__this is bold text__' + "\n" + '~~strikethrough uses two tilde~~',

         }
         let helpText = {
             
             headings:  'HEADINGS' + "\n" + "\n" + '# heading = <h1>' + "\n" + '## heading = <h2>' + "\n" + '### heading = <h3>' + "\n" + "\n"
                        + 'TEXT' + "\n" + "\n" + '*italic*' +  "\n" + '**bold**' + "\n" + '***bold-italic***' + "\n" + '[link](http://example.com)' + "\n" + "\n" + 'LISTS'  + "\n" + "\n" + '* listItemOne' + "\n" + '* listItemTwo' + "\n" + ' ' + ' ' + ' ' + ' ' + ' ' + ' ' + '* listTwoSubItem' + "\n" + '* listItemThree' + "\n" + "\n" + 'STRIKETHROUGH' + "\n" + "\n" +'~~deleted word~~' + "\n" + "\n" + 'HIGHLIGHT' + "\n" + "\n" + '==highlight background=='

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

                <h2 className="markHeaderOne">Markdown</h2>
                <h2 className="markHeaderTwo">MarkUp</h2>
               
                <TextAreas initial={paragraphs.initial} headings={helpText.headings}/>
                

               
               
          

                
            </div>
        );
        
    }
    
}

render(<HeaderComp/>, window.document.getElementById("headerComp"));


