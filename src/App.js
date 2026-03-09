import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Contactus from './components/Contactus';
import Help from './components/Help';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Sixthcomponent from './components/Sixthcomponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Notfound from './components/Notfound';


function App() {
  return (
    <Router>
      <div className="App">

      <nav>
        <Link to="/First" classname="navlinks">First</Link>
        <Link to="/Second" classname="navlinks">Second</Link>
        <Link to="/Third" classname="navlinks">Third</Link>
        <Link to="/Fourth" classname="navlinks">Fourth</Link>
        <Link to="/Fifth" classname="navlinks">Fifth</Link>
        <Link to="/Sixth" classname="navlinks">Sixth</Link>
        <Link to="/Help" classname="navlinks">Help</Link>
        <Link to="/ContactUs" classname="navlinks">ContactUs</Link>
      </nav>

      <header className="App-header">
        <h1>Welcome to Learning Reactjs</h1>
        <h2>React is fun</h2>
      </header>
      {/*Below we render/display our first component*/}
      <Routes>
        <Route path="/First" element={<Firstcomponent/>} />
        <Route path="/Second" element={<Secondcomponent/>} />
        <Route path="/Third" element={<Thirdcomponent/>} />
        <Route path="/Fourth" element={<Fourthcomponent/>} />
        <Route path="/Fifth" element={<Fifthcomponent/>} />
        <Route path="/Sixth" element={<Sixthcomponent/>} />
        <Route path="/Help" element={<Help/>} />
        <Route path="/ContactUs" element={<Contactus/>} />
        <Route path="*" element={<Notfound/>} />        
      </Routes>
      
    </div>
    </Router>
  )
}

export default App;

// jsx

// App.js is the root file