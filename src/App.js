import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Category from "./containers/CategoryContainer"


class App extends Component{

  // componentDidMount(){
  //   fetch("http://localhost:3000/api/v1/categories")
  //   .then(response=>response.json())
  //   .then(data=>console.log(data[0]))

  // }

  render(){
    return (
      <div className="App">
        Hi
        <Category/>
      </div>
    );

  }
}

export default App;
