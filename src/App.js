import React,{Component} from 'react';
import './App.css';
import CategoryContainer from "./containers/CategoryContainer"
import PostContainer from "./containers/PostContainer"



class App extends Component{


  render(){
    return (
      <div className="App">
        <PostContainer/>
        <CategoryContainer/>
      </div>
    );

  }
}

export default App;
