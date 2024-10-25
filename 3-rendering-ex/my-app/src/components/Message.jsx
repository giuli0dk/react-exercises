
const Message = ({age}) => {
    return (
        <div>
            {age >= 18 ? <p>Age: {age}, you have more than 18y, you are an adult!</p> : <p>You are too young!</p>}
        </div>
    )
}

export default Message