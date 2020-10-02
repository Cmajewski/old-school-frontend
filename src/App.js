import React,{Component} from 'react';
import './App.css';
import CategoryContainer from "./containers/CategoryContainer"
import PostContainer from "./containers/PostContainer"
// import NavBar from '../components/NavBar';
// import {Route} from "react-router-dom"


class App extends Component{


  render(){
    return (
      <div className="App">
        <PostContainer/>
      </div>
    );

  }
}

export default App;
