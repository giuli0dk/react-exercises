
const UncontrolledLogin = ({ onLogin }) => {
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const password = form.password.value;
        const rememberMe = form.rememberMe.checked;
        onLogin({ username, password, rememberMe });
    };

    const loginWithFormData = (event) => {
        event.preventDefault();
        const form = event.target.form;
        const formData = new FormData(form);
        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
            rememberMe: formData.get('rememberMe') === 'on'
        };
        console.log(data);
    };

    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            <label htmlFor="rememberMe">Remember me:</label>
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <button type="submit">Log in</button>
            <button type="button" onClick={loginWithFormData}>Log in with FormData</button>
        </form>
    );
};

export default UncontrolledLogin;