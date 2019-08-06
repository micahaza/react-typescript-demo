import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

class App extends React.Component{
  render() {
    return (
      <Router   basename={'/bequant-coding-test'}>
         <div className="topnav">
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
            <NavLink to="/about/" activeClassName="active">About</NavLink>
          </div>

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
      </Router>
    );
  }
}

export default App;
