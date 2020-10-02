export default function categoryReducer (state={posts:[]}, action){
    switch (action.type){
        case "FETCH_POSTS":
        return {posts: action.payload}
        case "ADD_POST":
            return{...state, posts:[...state, action.payload]}
        default:
            return state

    }
}