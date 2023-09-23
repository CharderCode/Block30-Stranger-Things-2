import { deletePost } from "../API";

const Post = ({post, token, fetchPosts}) => {
    const {_id, title, description, price, location, author, isAuthor} = post;
    async function handleDelete(){
        await deletePost(_id, token);
        fetchPosts();
    } 
    
    return (
        <div className="post">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Price: {price}</p>
        <p>Created by: {author.username}</p>
        <p>Location: {location}</p>
        {isAuthor && <button onClick={handleDelete}>delete</button>}
        {!isAuthor && token && <button>Message</button>}
    </div>
    )
}

export default Post;