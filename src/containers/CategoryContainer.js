import React, {Component} from "react"
import {fetchCategories} from "../actions/fetchCategories"
import {Route, Switch} from "react-router-dom"
import {connect} from "react-redux"
import Category from "../components/Category"
import Categories from "../components/Categories"
import Posts from "../components/Posts"


class CategoryContainer extends Component {

    componentDidMount=()=>{
        this.props.fetchCategories()
    }

    render (){
        return (
            <div>
              <Switch>
                <Route path="/categories/:id/posts" render={(props)=><Posts posts={props.location.state.posts}/>}></Route>
                
                <Route path="/categories" render={()=><Categories categories={this.props.categories}/>}></Route>
                <Route path="/categories/:id" component={Category}></Route>
            
                </Switch>
            </div>
        )
        }
}

const mapStateToProps=(state)=>{
return({
    categories: state.categories
})
}

export default connect(mapStateToProps,{fetchCategories})(CategoryContainer);