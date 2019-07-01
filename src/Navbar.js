import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Navbar.css';
import Eye from './eye copy.png';
import Heart from './Home.png';
import Person from './Me.png';
import Name from './logo.png';
class Navbar extends React.Component{
    render() {
        return (
            <Router>
            <div className="container">
            <div className="nav">
              <ul className="bar">
                <li className="tab"><Link to="/">HOME</Link></li>
                <li className="tab"><Link to="/resume/">RESUME</Link></li>
                <li className="tab"><Link to="/education/">EDUCATION</Link></li>
                <li className="tab"><Link to="/gemstones/">GEMSTONES</Link></li>
                <li className="tab"><Link to="/makeupskincare/">MAKEUP/SKINCARE</Link></li>
                <li className="tab"><Link to="/FAQ/">FAQ</Link></li>
                <li className="tab"><Link to="/contact/">CONTACT</Link></li>
              </ul>
              <img className="name" src={Name}></img>
              </div>
            <Route path="/" exact component={Home} />
            <Route path="/FAQ/" component={FAQ} />
            <Route path="/resume/" component={Resume} />
            <Route path="/education/" component={Education} />
            <Route path="/gemstones/" component={Gem} />
            <Route path="/makeupskincare/" component={MakeupSkincare} />
            <Route path="/contact/" component={Contact} />

            </div>
            </Router>
        );
    }
}
const Home = () => {
    return (
        <div class="image-txt-container"> 
        <div class="text">
            <h1 class="header">I'm Jennifer Huang, a sophomore at UC Berkeley pursuing CS, Applied Math, and Music.</h1>
            <p class="description">I hail from the north(Toronto, Canada) and you can find my roots in Nanjing, China.
               If I'm not teaching, doing research, or poking around with my personal projects, 
               you can find me singing, playing instruments, and writing articles about gemstones. If you beat me to a game of PUBG I'm 
               down to appraise your gemstones for free. (Actually, I think if you ask me to do it I'll probably give you a rant on gemstones anyways)
            </p>
            </div>       
            <img align='right' src={Person} width='50%' height='50%'/>
            </div> );
            }

const Resume = () =>{
    return (
    <div>
    <h2>Insert resume here</h2>
    </div> );
}
const Education = () =>{
    return (
    <div>
    <h2 class="header">Insert course staff material here</h2>
    <p>Throughout my life, I've been inspired by a lot of my teachers, who not only taught me relevant 
        course materials but also gave me courage to pursue things in the middle of hardship. Thus, I've 
        always thought of giving back to this community through the same way that I've received help from.
        Currently I am involved in Computer Science Mentors(CSM), an organization that fosters a welcoming 
        environment for students to receive weekly mentor sessions from. In addition, I am also part of the 
        course staff for CS61A(Structures and Interpretations of Programming) currently. Below you can find 
        some notes and guides I've organized for the course.
    </p>
    <ul>
        <li></li>
    </ul>
    </div> );
}
const Gem = () =>{
    return (
    <div>
    <h2>Insert gemstones stuff here</h2>
    </div> );
}
const MakeupSkincare = () =>{
    return (
    <div>
    <h2>Insert makeup and skincare stuff here</h2>
    </div> );
}


  

const FAQ = () => {
    return (
<div class="image-txt-container"> 
<div class="text">
    <h1 class="header">I'm Jennifer Huang, a sophomore at UC Berkeley pursuing CS, Applied Math, and Music.</h1>
    <p class="description">I hail from the north(Toronto,Canada) and you can find my roots in Nanjing, China.
       If I'm not teaching, doing research, or poking around with my personal projects, 
       you can find me singing, playing instruments, and writing articles about gemstones. If you beat me to a game of PUBG I'm 
       down to appraise your gemstones for free.(Actually, I think if you ask me to do it I'll probably give you a rant on gemstones anyways)
    </p>
    </div>       
    <img align='right' src={Person} width='50%' height='50%'/>
    </div> );
    }

const Contact = () => {
    return <h2>Contact</h2>;
}

export default Navbar;
