
const Age = ({age, name}) => {

    return (
        <div>

        <p>Age: {age}</p>
        
        {age >= 18 ? <p>Age: {age}, you are 18y or more!</p> : null}
        
      
        {age ? <p>Age: {age}, the property age is present!</p> : null}
        
        
        {age >= 18 && age <= 65 ? <p>Age: {age}, you are more than 18y and less than 65y!</p> : null}
        
        
        {age >= 18 && name === "John" ? <p>Age: {age}, you are more than 18y and your name is {name}!</p> : null}
        </div>
        
    )
}

export default Age