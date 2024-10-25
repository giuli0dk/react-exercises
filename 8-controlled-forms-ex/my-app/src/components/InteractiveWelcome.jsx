import { useState } from "react";
import Welcome from "./Welcome";

const InteractiveWelcome = () => {
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <Welcome name={name} />
        </div>
    );
};
    
    export default InteractiveWelcome;