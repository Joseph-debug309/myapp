import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Contactus from './components/Contactus';
import Help from './components/Help';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Sixthcomponent from './components/Sixthcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Learning Reactjs</h1>
        <h2>React is fun</h2>
      </header>
      {/*Below we render/display our first component*/}
      <Firstcomponent></Firstcomponent>
      <Secondcomponent></Secondcomponent>
      <Contactus></Contactus>
      <Help></Help>
      <Thirdcomponent></Thirdcomponent>
      <Fourthcomponent></Fourthcomponent>
      <Fifthcomponent/>
      <Sixthcomponent/>
    </div>
  )
}

export default App;

// jsx

// App.js is the root file