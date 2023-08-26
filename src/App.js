import React from 'react';
import { HashRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import UpdateGoogleSheet from './components/UpdateGoogleSheet';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/setdate">Set Deadline</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/setdate" element={<UpdateGoogleSheet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
