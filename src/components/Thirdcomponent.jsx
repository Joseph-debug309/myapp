const Thirdcomponent = () => {

    // Below we declare some variables. Notice thy are b44 the code
    let name = "Joseph";
    let age = 18;
    let message = "I love programming"

    return(
        <div className="Thirdcomponent">
           { /* Below we bind our variables. we use the name we had declared before*/}
            <h1>Welcome to my third component</h1>
            <h5>My name is {name}</h5>
            <h5>My age is {age}</h5>
            <h5>And {message}</h5>
        </div>
    )
}

export default Thirdcomponent;