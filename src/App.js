import React from 'react';
import './App.css';
import {GlobalProvider} from './context/GlobalState'
import {Header} from "./components/Header"
import { CreateEntry } from "./components/CreateEntry"
import {Entries} from "./components/Entries"
function App() {
  return (
    <GlobalProvider>
 <Header />
      <div className="container">
        <CreateEntry />
        <Entries/>
      </div>
    </GlobalProvider>
    
     
    
  );
}

export default App;
