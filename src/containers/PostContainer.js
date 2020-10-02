import React, {Component} from "react"
import {connect} from "react-redux"
import {fetchPosts} from "../actions/fetchPosts"

import PostForm from "../components/PostForm"
import Posts from "../components/Posts"

class PostContainer extends Component {

    componentDidMount(){
        this.props.fetchPosts()
    }

render (){
    return (
        <div>
        <PostForm/> <br/><br/>
        <Posts posts={this.props.posts}/>
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