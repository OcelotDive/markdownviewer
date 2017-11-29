import React from "react";
const marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

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
            <div className="rightTextArea" dangerouslySetInnerHTML={{__html:marked(this.state.initial)}}></div>
       
            
                <textArea className={classSelect} spellCheck="false" onClick={()=> this.fadeOutHelp()}>{this.props.headings}</textArea>
</form>


        );
    }
}


