import { useState, useEffect } from 'react';

const GithubUser = ({ username }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [username]);

    if (!userData) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="50" />
            <p>Name: {userData.name}</p>
            <p>Login: {userData.login}</p>
        </div>
    );
};

export default GithubUser;