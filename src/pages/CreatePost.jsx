import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makePost } from "../API";

const CreatePost = ({ token }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    const navigate = useNavigate();
    if(!token){
        navigate('/login');
    }
    async function handleSubmit(e) { 
        e.preventDefault();
        await makePost({title, description, price, location, willDeliver}, token);
        setTitle('');
        setDescription('');
        setPrice(0);
        setLocation('');
        setWillDeliver(false);
        navigate('/');
    }

    return ( // Form to post a new message
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)}/>
                <label>Will Deliver</label>
                <input type="checkbox" checked={willDeliver} onChange={(e) => setWillDeliver(e.target.checked)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CreatePost;