import { useContext } from 'react';
import LanguageContext from './LanguageContext';

const messages = {
    en: 'Hello, World!',
    es: '¡Hola, Mundo!',
    fr: 'Bonjour, le Monde!',
    de: 'Hallo, Welt!',
    it: 'Ciao, Mondo!',
    al: 'Përshëndetje, Botë!'
};

const Hello = () => {
    const language = useContext(LanguageContext);
    return <h2>{messages[language]}</h2>;
};

export default Hello;