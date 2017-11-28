import React from "react";
const marked = require('marked');

export class TextAreas extends React.Component {
    constructor(props) {
        super();
        this.state = {
            initial: props.initial,
            help: false,
            
           
        };
    }
  
    fadeOutHelp () {
        this.setState({
            help: !this.state.help
        })
    }
    
    watchChange (event) {
    this.setState({
      initial: event.target.value
    });
  }
    
    clearText() {
        this.setState({
            initial: ''
        }) 
    }
    
   
        
    render() {
     const classSelect = this.state.help ? 'helpDiv' : 'helpDivHide';
        return(
            <form  id="usrformleft" className="form-group">
                <ul className="nav navbar-nav buttonGroup">
                            <li onClick={()=> this.fadeOutHelp()}><a href="#">Markdown Help</a></li>
                            <li onClick={() => this.clearText()}><a href="#">Clear</a></li>
                            <li><a href="/">Reset</a></li>
                        </ul>
            
        <textarea id="content" className="leftTextArea" rows="30" cols="100" name="markdownArea" form="usrformleft" spellCheck="false" placeholder="Write Markdown" value={this.state.initial} onChange={(event) => this.watchChange(event)}>
            
           
            
            </textarea>

        <textarea className="rightTextArea"  value={marked(this.state.initial)}>
            {marked(this.state.initial)}
        
            </textarea>
           
                <textArea className={classSelect} spellCheck="false" onClick={()=> this.fadeOutHelp()}>{this.props.headings}</textArea>
</form>


        );
    }
}


