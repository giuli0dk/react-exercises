import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import ShowGithubUser from './components/ShowGithubUser';
import GithubUserList from './components/GithubUserList';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/counter">Counter</Link></li>
                        <li><Link to="/users">Users</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Welcome name="John Doe" age={30} />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/users" element={<GithubUserList />}>
                        <Route index element={<p>Add a user and select it</p>} />
                        <Route path=":username" element={<ShowGithubUser />} />
                    </Route>
                    <Route path="*" element={<p>Not Found</p>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;