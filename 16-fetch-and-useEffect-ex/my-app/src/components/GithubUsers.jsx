import { useState } from 'react';
import GithubUser from './GithubUser';

const GithubUsers = () => {
    const [usernames, setUsernames] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            setUsernames([...usernames, inputValue.trim()]);
            setInputValue('');
        }
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter Github username"
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                {usernames.map((username, index) => (
                    <li key={index}>
                        <GithubUser username={username} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GithubUsers;