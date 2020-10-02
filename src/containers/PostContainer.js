import React, {Component} from "react"
import {connect} from "react-redux"
import {fetchPosts} from "../actions/fetchPosts"
import PostForm from "../components/PostForm"
import Posts from "../components/Posts"
import {Route, Switch} from "react-router-dom"
import NavBar from "../components/NavBar"


class PostContainer extends Component {

    componentDidMount(){
        this.props.fetchPosts()
    }

render (){
    return (
        <div>
            <NavBar/>
        <Switch> 
            <Route path="/posts/new" component={PostForm}/>
            <Route exact path="/posts" render={()=><Posts posts={this.props.posts}/>}/>
        </Switch>
        </div>
    )
    }
}

const mapStateToProps=(state)=>{
    return{
        posts: state.posts
    }
}

export default connect (mapStateToProps,{fetchPosts})(PostContainer);