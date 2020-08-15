import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./component/Home.jsx";
import Thor from "./component/Thor.jsx";
import Ironman from "./component/Ironman.jsx";
import CaptainAmerica from "./component/CaptainAmerica.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/thor" render={(props) => <Thor {...props} />} />
          <Route
            exact
            path="/ironman"
            render={(props) => <Ironman {...props} />}
          />
          <Route
            exact
            path="/captainamerica"
            render={(props) => <CaptainAmerica {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
