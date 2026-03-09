import { useState } from "react"

const Sixthcomponent = () => {

    const [weight, setWeight] = useState(50)
    const [message, setMessage] = useState("The current weight is: ")

    return(
        <div className="Sixthcomponent">
            <h1>Below is the sixth Component</h1>

            <h4>{message}{weight}</h4>

            <button onClick={ () => [setWeight(55), setMessage("The new weight is: ")]}>Update weight</button>
        </div>
    )
}

export default Sixthcomponent