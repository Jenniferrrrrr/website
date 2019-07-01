import React, { Component } from 'react';
import './App.css';
import Person from './Page/Page.js';
import Navbar from './Navbar.js';
class App extends Component{
  state = {
    persons: [
      {name: "bob", age:34},
      {name: "alice", age:56}
    ],
    otherState: "bbbbbbbbbbbbb",
    showPersons: false
  }

   buttonHandler = (newName) => {
    // console.log("this was clicked!");
    this.setState( { 
      persons: [
      {name: newName, age:34},
      {name: "alice", age:56}
    ]
  });
  }

   nameChangeHandler = (event) =>  {
    this.setState( { 
      persons: [
      {name: "Max", age:34},
      {name: event.target.value, age:56}
    ]
  });
  }

   toggleHandler = () => {
     const doesShow = this.state.showPersons;
     this.setState({showPersons: !doesShow});
   }

  render(){
  const style= {
    backgroundColor: "lightblue",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };
  let persons = null;
  if(this.state.showPersons){
    persons=(
    <div>
     {this.state.persons.map(person=>{
       return <Person 
       name={person.name} 
       age={person.age}/>
     })}
      </div>
      );
  }
    return (
      <div className="App">
     {/* <button 
     style={style}
    //  onClick={this.toggleHandler}>Switch Name</button>
     {persons} */}
     <Navbar />
     </div>
    );
}
}
export default App;


