import { useState, useEffect } from "react";
import { fetchPosts } from "../API";
import { Link } from "react-router-dom";
import Post from "../components/Post";

const Posts = ({token}) => {
    const [posts, setPosts ] = useState([]);

    async function fetchData() {
        const posts = await fetchPosts(token);
        setPosts(posts);
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div>
            <h1>Posts</h1>
            {token && <Link to='/createPost'>Create Post </Link>}
            {
            posts.map(post => ( <Post key={post._id} post={post} token={token} fetchPosts={fetchData}/>))
            }
        </div>
    )
}

export default Posts;