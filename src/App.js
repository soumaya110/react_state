import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      show : true,
      Person : { 
                fullName : "Soumaya Jebali",
                bio : "Degree in Telecommunication Network", 
                imgSrc: "./public/image.jpg", 
                profession:"Student at GOMYCODE",
              },
    }
    this.clickHandler = this.clickHandler.bind(this);
  }



  clickHandler(){
    this.setState(function (prevState){
      return{
        show : !prevState.show ,
      }
    });
  }

  render(){
    if(this.state.show)
    return (
      <div className="container" style={{margin:'auto'}}>
        <button className="btn btn-primary" onClick={this.clickHandler}  style={{width:'100px',height:'50px',backgroundColor:'pink'}}>Hide</button>
        <br/>
        <img src="image.jpg"  width="300px" height="350px"/>
        <h1>{this.state.Person.fullName}</h1>
        <h2>{this.state.Person.bio}</h2>
        <h2>{this.state.Person.profession}</h2>
      </div>
      );
      else return (
        <div >
      <button className="btn btn-primary" onClick={this.clickHandler} style={{width:'100px',height:'50px',backgroundColor:'pink'}}>Show</button>
      </div>
      );
  }
}

export default App;
