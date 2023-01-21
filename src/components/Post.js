import React, { useContext } from "react";
import { UserContext, PostContext } from "../App";

const Post = ({ image, content, user, id }) => {
    const currentUser = useContext(UserContext);
    const { dispatch } = useContext(PostContext);

    const isCurrentUser = currentUser === user;

    const handleDeletePost = () => {
        dispatch({ type: "DELETE_POST", payload: { id }});
    }

    return <>
        {image && (
            <img 
                style={{height: 100, width: 200, objectFit: "cover"}}
                src={URL.createObjectURL(image)}
                alt="Post cover"
            />
        )}
        <p>{content}</p>
        <div style={{ color: isCurrentUser && "green" }}>{user}</div>
        <div>
        {isCurrentUser && <button onClick={handleDeletePost}>Delete Post</button>}
        </div>
    </>
};

export default Post;