import './App.css';
import Colors from './components/ColorsComponent';
import Color from './components/ColorComponent';

const App = () => {
    const colorData = [
        { id: 1, name: 'Red' },
        { id: 2, name: 'Green' },
        { id: 3, name: 'Blue' }
    ];

    return (
        <>
            <Colors colors={colorData} />
            <hr />
            <Color color={colorData[0]} />
            <Color color={colorData[1]} />
            <Color color={colorData[2]} />
        </>
    );
};

export default App;