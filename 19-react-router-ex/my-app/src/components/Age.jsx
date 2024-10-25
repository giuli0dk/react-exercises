import PropTypes from 'prop-types';

const Age = ({ age }) => {
    return <p>Your age is {age}</p>;
};

Age.propTypes = {
    age: PropTypes.number.isRequired
};

export default Age;