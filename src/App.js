import React, { useEffect, useState, useCallback, createContext, useContext, useReducer } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import postReducer from "./reducer";

export const UserContext = createContext();
export const PostContext = createContext({
    posts: []
});

const App = () => {
    const [user, setUser] = useState("Oscar");
    // const [posts, setPosts] = useState([]);
    const initialPostState = useContext(PostContext);
    const [state, dispatch] = useReducer(postReducer, initialPostState);

    useEffect(() => {
        document.title = user ? `${user}'s Feed`: "Please login";
    }, [user]);

    // const handleAddPost = useCallback((newPost) => {
    //     setPosts([newPost, ...state.posts]);
    // }, [state.posts]);

    if (!user) {
        return <Login setUser={setUser}/>;
    }

    return (
        <PostContext.Provider value={{ state, dispatch }}>
        <UserContext.Provider value={user}>
            <Header user={user} setUser={setUser} />
            <CreatePost user={user} 
            // handleAddPost={handleAddPost}
            />
            <PostList posts={state.posts} />
        </UserContext.Provider>
        </PostContext.Provider>
    );
};

export default App;