import React, { Component } from 'react';
import './App.css';
import './Footer.css';
import LinkedIn from './linkedin-logo.png';
import Github from './github-logo.png';
import Email from './email.png';
class App extends Component{
    render(){
      return (
        <div className="footer">
        <span className="line"/>
        <div style={{padding:"20px 0px 0px 0px"}}>
        <a  className="icons" href="https://www.linkedin.com/in/serenade092"><img src={LinkedIn} height="50px" width="50px"></img></a>
        <a className="icons"  href="https://github.com/Jenniferrrrrr"><img src={Github} height="50px" width="50px"></img></a>
        <a className="icons"  href="mailto:serenade092@berkeley.edu"><img src={Email} height="50px" width="50px"></img></a></div>
        <div className="paragraph">
        <p>Copyright © 2019 Jennifer Huang, All Rights Reserved. Footer icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
        </div></div>
    );
}
}

export default App;


