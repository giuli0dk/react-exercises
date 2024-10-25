import Age from "./Age";

const Welcome = ({name}) => {
    
    return (
        <div>
            <p>Welcome, <strong>{name}</strong>!</p>
            <Age age={25}/>
        </div>
    );
}

export default Welcome;
