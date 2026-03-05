import { useState } from "react"

const Sixthcomponent = () => {

    const [weight, setWeight] = useState(50)

    return(
        <div className="Sixthcomponent">
            <h1>Below is the sixth Component</h1>

            <h4>Current weight is {weight}</h4>

            <button onClick={ () => setWeight(55)}>Update weight</button>
        </div>
    )
}

export default Sixthcomponent