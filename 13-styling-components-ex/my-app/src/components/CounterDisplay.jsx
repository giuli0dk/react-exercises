
const CounterDisplay = ({ count }) => {
    const style = {
        fontSize: '20px',
        color: 'blue'
    };

    return  (
    <div style={style}>Count: {count}</div>
    )
};

export default CounterDisplay;