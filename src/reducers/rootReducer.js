export default function rootReducer (state={categories:[],posts:[]}, action){
    switch (action.type){
        case "FETCH_POSTS":
        return {...state,posts: action.payload}
        case "ADD_POST":
            return {...state, posts:[...state.posts, action.payload]}
        case "FETCH_CATEGORIES":
            return{...state,categories:action.payload}
        default:
            return state

    }
}