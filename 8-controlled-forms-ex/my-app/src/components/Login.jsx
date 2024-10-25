import { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    };

    const handleReset = () => {
        setUsername('');
        setPassword('');
        setRememberMe(false);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        onLogin({ username, password, rememberMe });
    };

    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
            <label htmlFor="rememberMe">Remember me:</label>
            <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} />
            <button type="submit" disabled={!username || !password}>Log in</button>
            <button type="button" onClick={handleReset}>Reset</button>
        </form>
    );
};


export default Login;