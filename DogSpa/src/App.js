import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customize from "./components/Packages";
import Checkout from "./components/BookVisit";

function App() {
  const [Package, setPackage] = useState({
    Premium_Groom: false,
    Cut_Style_Beyond: false,
    Bath_brush_Beyond: false,
  
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
