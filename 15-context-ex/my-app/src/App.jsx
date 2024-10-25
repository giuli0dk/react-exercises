import { useState } from 'react';
import Hello from './components/Hello';
import LanguageContext from './components/LanguageContext';
import './App.css';

const App = () => {
    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <LanguageContext.Provider value={language}>
            <div>
                <select onChange={handleLanguageChange} value={language}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                    <option value="al">Albanian</option>
                </select>
                <Hello />
            </div>
        </LanguageContext.Provider>
    );
};

export default App;