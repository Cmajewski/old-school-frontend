import React, {Component} from "react"
import {fetchCategories} from "../actions/fetchCategories"
import {Route, Switch} from "react-router-dom"
import {connect} from "react-redux"
import Category from "../components/Category"
import Categories from "../components/Categories"

class CategoryContainer extends Component {

    componentDidMount=()=>{
        this.props.fetchCategories()
    }

    render (){
        return (
            <div>
                <Route path="/Categories" render={()=><Categories categories={this.props.categories}/>}></Route>
                <Route path="/Category/:id" component={Category}></Route>
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