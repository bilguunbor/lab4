import React from "react";
import { Switch, Route } from "react-router";
import Example from "../../example/Example";
import States from "../../states/States";
import Menu from "../../Menu";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/example" component={Example} />
        <Route path="/p2" component={States} />
        <Route path="/" component={Example} />
      </Switch>
    </div>
  );
};
export default App;
