
import { useState } from 'react';
import CounterDisplay from './CounterDisplay';
import { useEffect } from 'react';
import Clock from './Clock';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log(`Counter: ${counter}`);
    });
    
    return (
        <div>
            <Clock />
            <CounterDisplay counter={counter} />
            <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Increment</button>
            <button onClick={() => setCounter(prevCounter => prevCounter - 1)}>Decrement</button>
            <button onClick={() => setCounter(0)}>Reset</button>
        </div>
    );
    }

export default Counter;

// Quando si chiama la funzione "setter" per incrementare il contatore, il parametro dovrebbe essere una funzione o un valore immediato? Perché? 
// Il parametro dovrebbe essere una funzione. Questo perché React può eseguire più set di stato in modo asincrono.
// Se si passa un valore immediato, React potrebbe non avere il valore più recente del contatore.
// esempio: 
// setCounter(counter + 1) non è garantito che React abbia il valore più recente di counter
// setCounter(prevCounter => prevCounter + 1) e' garantito che React abbia il valore più recente di counter