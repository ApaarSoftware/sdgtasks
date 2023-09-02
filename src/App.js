import React from 'react';
import { HashRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import UpdateGoogleSheet from './components/UpdateGoogleSheet';
import UpdateCompletedDateTime from './components/UpdateCompletedDateTime';

function App() {

  //   const location = useLocation();
  const queryParams = new URLSearchParams(document.location.search);
  const TaskId = queryParams.get('TaskId');
//   const TaskDesc = queryParams.get('TaskDesc');
  const cellNo = queryParams.get('CellNo');
  const completedCellNo = queryParams.get('completedCellNo');
  
  console.log('queryParams TaskId : ' + TaskId);
  console.log('queryParams cellNo : ' + cellNo);
  console.log('queryParams completedCellNo : ' + completedCellNo);


  return (
    <Router>
      
      <div className="App">
        <nav>
          <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            {/* <li>
              <Link to="about">About</Link>
            </li> */}
            <li>
              <Link to="setdate">Set Deadline</Link>
            </li>
            <li>
              <Link to="markcomplete">Mark as completed</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} /> */}
          <Route path="setdate" element={<UpdateGoogleSheet />} />
          <Route path="markcomplete" element={<UpdateCompletedDateTime />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
