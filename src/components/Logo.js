import React from "react";
const logo = require('../images/markdown.png');

export class Logo extends React.Component {
    
    render() {
        return(
            <div class="logoHolder">
                <img class="logo" src={logo}/>
            
            </div>
            
        );
    }
    
}