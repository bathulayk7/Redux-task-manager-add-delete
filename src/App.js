import React from 'react';
import Header from './components/shared/Header/Header';
import TaskManager from './components/TaskManager/TaskManager';
import Footer from './components/shared/Footer/Footer';
// import Login from './components/Login/Login';

function App() {
  return (
    <div className="container">
          <div className="row">
            <div className="col">
              <Header/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <TaskManager/>
              {/* <Login/> */}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Footer/>
            </div>
          </div>
    </div>
  );
}

export default App;
