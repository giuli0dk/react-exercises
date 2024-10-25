import useCounter from './components/useCounter';
import FilteredList from './components/FilteredList';
import './App.css';

const App = () => {
    const { count, increment, decrement, reset } = useCounter();

    const list = [
        { id: 1, name: 'Alice', age: 22 },
        { id: 2, name: 'Bob', age: 17 },
        { id: 3, name: 'Charlie', age: 19 },
        { id: 4, name: 'David', age: 16 }
    ];

    return (
        <div>
            <h1>Custom Hooks Example</h1>

            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>

            <h2>Filtered List</h2>
            <FilteredList list={list} />
        </div>
    );
};

export default App;