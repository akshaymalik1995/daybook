import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import {GlobalProvider} from './context/GlobalState'
import {Header} from "./components/Header"
import { CreateEntry } from "./components/CreateEntry"
import {EditEntry} from "./components/EditEntry"
import {Entries} from "./components/Entries"
import {Navbar} from "./components/Navbar"
import {ViewEntry} from "./components/ViewEntry"
function App() {
  return (
    <Router>
      <GlobalProvider>
        <Header />
        <div className="container">
          <main>
            <Navbar/>
            <switch>
              <Route exact path="/" component={Entries} />
              
              <Route exact path="/add" component={CreateEntry} />
              <Route exact path="/edit/:id" component={EditEntry} />
              <Route exact path="/view/:id" component={ViewEntry} />
            </switch>
           
          </main>

        </div>
      </GlobalProvider>
    </Router>




  );
}

export default App;
