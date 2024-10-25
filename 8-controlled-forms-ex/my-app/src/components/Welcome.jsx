
const Welcome = ({ name }) => {

    return (
        <>
        {name ? <p>Welcome, {name}!</p> : <p>Welcome, insert your name!</p>}
        </>
)
};

export default Welcome;