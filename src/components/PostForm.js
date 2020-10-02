import React, { Component } from "react";

class PostForm extends Component{

    constructor(){
        super()
        this.state={
            title:"",
            image_url:"",
            description:"",
            size:"",
            price: null,
            availability: "",
            category_id: null
        }
    }
    render (){
        return (
           <div>
               <form className="post-form">
                   <label>Name:</label>
                   <input type="text" name="title" placeholder="Title"/>
                    <br/>
                   <input type="file" name="image_url"/>
                    <br/>
                   <label> Description:</label>
                   <input type="text" name="description" placeholder="Description"/>
                    <br/>
                   <label>Size:</label>
                   <input type="text" name="size" placeholder="Size"/>
                    <br/>
                   <label>Price:</label>
                   <input type="text" name="price" placeholder="Price"/>
                    <br/>
                   <select>
                       <option value="category">Category</option>
                       <option value="1">Schools</option>
                       <option value="2">Bands</option>
                       <option value="3">Cities</option>
                       <option value="4">Tees</option>
                       <option value="5">Sweatshirt</option>
                   </select>

               </form>
           </div>
        )
    }

}

export default PostForm