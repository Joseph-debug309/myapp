import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Contactus from './components/Contactus';
import Help from './components/Help';

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
    </div>
  );
}

export default App;

// jsx