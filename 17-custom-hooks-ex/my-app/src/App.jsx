import useCounter from './components/useCounter';
import useForm from './components/useForm';
import useGithubUser from './components/useGithubUser';
import useCurrentLocation from './components/useCurrentLocation';
import './App.css';

const App = () => {
    const { count, increment, decrement, reset } = useCounter();
    const { formValues, handleChange } = useForm();
    const { user, error, loading, fetchUserData } = useGithubUser('octocat');
    const { location, error: locationError, loading: locationLoading, getCurrentLocation } = useCurrentLocation();

    return (
        <div>
            <h1>Custom Hooks Example</h1>

            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>

            <h2>Form</h2>
            <input
                type="text"
                name="username"
                value={formValues.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Password"
            />

            <h2>Github User</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                user && (
                    <div>
                        <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="50" />
                        <p>Name: {user.name}</p>
                        <p>Login: {user.login}</p>
                    </div>
                )
            )}
            <button onClick={() => fetchUserData('octocat')}>Fetch User</button>

            <h2>Current Location</h2>
            {locationLoading ? (
                <p>Loading...</p>
            ) : locationError ? (
                <p>Error: {locationError}</p>
            ) : (
                location && (
                    <div>
                        <p>Latitude: {location.latitude}</p>
                        <p>Longitude: {location.longitude}</p>
                    </div>
                )
            )}
            <button onClick={getCurrentLocation}>Get Current Location</button>
        </div>
    );
};

export default App;