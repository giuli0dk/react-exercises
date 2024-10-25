import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const GithubUserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://api.github.com/users');
            const data = await response.json();
            setUsers(data);
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.login}`}>{user.login}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
};

export default GithubUserList;