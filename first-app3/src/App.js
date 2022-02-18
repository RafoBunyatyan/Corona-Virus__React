import React, { useContext } from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Theme from './Components/context';

function App() {
  const { theme } = useContext(Theme);

  if (theme) {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  } else {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
  };

  return (
    <>
      <Router>
          <Route path="/home">
            <Home />
          </Route>
      </Router>
    </>
  );
};

export default App;