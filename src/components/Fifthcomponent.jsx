import { useState } from "react";


const Fifthcomponent = () =>{

    // The useState() hook helps to create dynamic websites whereby it ussually has the start/innitial state followed by a state that is showed when some effect happens on our website

    const [number, setNumber] = useState(10);

    return(
        <div className="Fifthcomponent">
            {/* Below we bind our value for number*/}
            <h1>Welcome to the fifth component</h1>

            <h2>Current number is: {number}</h2>

            {/*Call the setNumber Function to update after a click effect*/}
            <button onClick={ () => setNumber(20)}>Click to update the new number</button>
        </div>
    )
}

export default Fifthcomponent