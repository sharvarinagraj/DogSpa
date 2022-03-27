import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customize from "./components/Packages";
import Checkout from "./components/BookVisit";

function App() {
  const [Package, setPackage] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  useEffect(() => {
    const data = localStorage.getItem("Package");
    if (data) {
      setPackage(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Customize
              Package={Package}
              setPackage={setPackage}
            />
          </Route>
          <Route path="/checkout">
            <Checkout Package={Package} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
