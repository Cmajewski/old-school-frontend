import React, { Component } from "react";
import {connect} from "react-redux"
import {createPost} from "../actions/createPost"

class PostForm extends Component{

    constructor(){
        super()
        this.state={
            title:"",
            image_url:"",
            description:"",
            size:"",
            likes:0,
            availability:"For Sale",
            price: "",
            category_id: ""
        }
    }

    handleChange=(event)=>{
     this.setState({
         [event.target.name]: event.target.value
     })
    }

    // handleImage=(event)=>{
    //     if (event.target.files && event.target.files[0]) {
    //         this.setState({
    //             image_url: URL.createObjectURL(event.target.files[0])
    //         });
    //         debugger;
    //       }
    //      }

    handleSubmit=(event)=>{
        event.preventDefault();
         this.props.createPost(this.state)
         this.setState({
            title:"",
            image_url:"",
            size:"",
            description:"",
            likes:0,
            availability:"For Sale",
            price: "",
            category_id: ""
         })
    }

    render (){
        return (
           <div>
               <form className="post-form" onSubmit={this.handleSubmit}>
                   <label>Name:</label>
                   <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
                    <br/>
                   {/* <input type="file" value={this.state.image_url} onChange={this.handleImage}/>
                    <br/> */}
                    <label>Image URL:</label>
                    <input type="text" name="image_url" placeholder="Image Link" value={this.state.image_url} onChange={this.handleChange}/>
                   <label> Description:</label>
                   <input type="text" name="description" placeholder="Description" onChange={this.handleChange}/>
                    <br/>
                   <label>Size:</label>
                   <input type="text" name="size" placeholder="Size" value={this.state.size} onChange={this.handleChange}/>
                    <br/>
                   <label>Price:</label>
                   <input type="text" name="price" placeholder="Price" value={this.state.price} onChange={this.handleChange}/>
                    <br/>
                   <select placeholder="Category" name="category_id" value={this.state.category_id} onChange={this.handleChange}>
                       <option default>Category</option>
                       <option value="1">Schools</option>
                       <option value="2">Bands</option>
                       <option value="3">Cities</option>
                       <option value="4">Tees</option>
                       <option value="5">Sweatshirt</option>
                   </select>
                    <input type="submit"/>
               </form>
           </div>
        )
    }

}

export default connect(null,{createPost})(PostForm)