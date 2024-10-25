import PropTypes from 'prop-types';
import Age from './Age';

const Welcome = ({ name, age }) => {
    return (
        <div>
            <p>Welcome, <strong>{name}</strong>!</p>
            <Age age={age} />
        </div>
    );
};

Welcome.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
};

Welcome.defaultProps = {
    name: 'Guest'
};

export default Welcome;