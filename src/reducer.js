const postReducer = (state, action) => {
    switch(action.type) {
        case "ADD_POST" : {
            const newPost = action.payload.post;
            // console.log(newPost);
            return { posts: [newPost, ...state.posts] }
        }
        case "DELETE_POST" : {
            const deletedPostId = action.payload.id;

            console.log(state.posts.filter(post => post.id !== deletedPostId));

            return { posts: state.posts.filter(post => post.id !== deletedPostId) };
        }
        default:
            return state;
    }
}

export default postReducer;