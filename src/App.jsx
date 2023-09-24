import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Context from '../src/pages/learn-useContext/index';
import Effect from '../src/pages/learn-useEffect/index';
import State from '../src/pages/learn-useState/index';
import Satu from '../src/pages/challenges/satu';
import Dua from '../src/pages/challenges/dua';

function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
            <Link to="/use-state">Use State</Link>
            </li>
            <li>
              <Link to="/use-effect">Use Effect</Link>
            </li>
            <li>
              <Link to="/use-context">Use Context</Link>
            </li>
            <li>
              <Link to="/challengeOne">Chal 1</Link>
            </li>
            <li>
              <Link to="/challengeTwo">Chal 2</Link>
            </li>

          </ul>
        </nav>
        <Routes>
          <Route path='/' exact element={<State />}></Route>
          <Route path='/use-context' exact element={<Context />}></Route>
          <Route path='/use-effect' exact element={<Effect />}></Route>
          <Route path='/use-state' exact element={<State />}></Route>
          <Route path='/challengeOne' exact element={<Satu />}></Route>
          <Route path='/challengeTwo' exact element={<Dua />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
