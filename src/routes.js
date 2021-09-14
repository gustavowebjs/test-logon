import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Register from "./pages/Register";
import Logon from "./pages/Logon";
import Logged from "./pages/Logged";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={Logon} /> */}
        <Route path="/" exact component={Register} />
        <Route path="/home" exact component={Logged} />
      </Switch>
    </BrowserRouter>
  );
}
