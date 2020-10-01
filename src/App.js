import React,{Component} from 'react';
import './App.css';
import CategoryContainer from "./containers/CategoryContainer"
import PostContainer from "./containers/PostContainer"


class App extends Component{

  // componentDidMount(){
  //   fetch("http://localhost:3000/api/v1/categories")
  //   .then(response=>response.json())
  //   .then(data=>console.log(data[0]))

  // }

  render(){
    return (
      <div className="App">
        <CategoryContainer/>
        <PostContainer/>
      </div>
    );

  }
}

export default App;
