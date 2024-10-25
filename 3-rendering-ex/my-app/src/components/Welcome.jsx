import Age from './Age'
import Message from './Message'

const Welcome = ({name}) => {
    return(
        <div>
            <p>Welcome, {name}!</p>
            <Age name={name} age={25}/>
            <Message age={25}/>
        </div>

    )
}

export default Welcome