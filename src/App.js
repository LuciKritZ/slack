import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Chat from "./components/chat";
import Login from "./components/login";
import { useStateValue } from "./state/StateProvider";
import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue(null);

  return (
    // BEM naming convention which stands for Block Element Modifier
    <div className="App">
      <Router>
        {!user ? (
            <Login />
          ) : (
            <>
              <Header />
              <div className="app__body">
                <Sidebar />
                <Switch>
                  <Route path="/room/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <h1>Welcome</h1>
                  </Route>
                </Switch>
              </div>
            </>
        )}
      </Router>
    </div>
  );
}

export default App;
