import { useState, useEffect } from 'react';

const useGithubUser = (initialUsername) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchUserData = async (username) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) {
                throw new Error('User not found');
            }
            const data = await response.json();
            setUser(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (initialUsername) {
            fetchUserData(initialUsername);
        }
    }, [initialUsername]);

    return { user, error, loading, fetchUserData };
};

export default useGithubUser;