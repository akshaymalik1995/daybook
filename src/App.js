import React from 'react';
import './App.css';

import {Header} from "./components/Header"
import {CreateEntry} from "./components/CreateEntry"
function App() {
  return (
    <div>
      <Header />
      <div className="container">
      <CreateEntry/>
      </div>
        
        
     
    </div>
  );
}

export default App;
