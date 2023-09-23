import { useState, useEffect } from "react";
import { profileData } from "../API";
import { useNavigate } from "react-router-dom";

const Profile = ( {token} ) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    useEffect(() => {
        async function getUser() {
            const user = await profileData(token)
            setUser(user);
        }
       getUser();
    }, [token])

    if (!token) { // Navigate to login page if there is no token
        navigate('/login');
    }

    return (
        <div>
            <h1>Profile</h1>
            <h2>{user.username}</h2>
        </div>
    )
}

export default Profile;