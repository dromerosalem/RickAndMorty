import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/MainPage.js";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/main' component={MainPage}></Route>
    </Switch>
  </BrowserRouter>
)


ReactDOM.render(<App />, document.getElementById("root"));