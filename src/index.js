import React from "react";
import ReactDOM from "react-dom";

import MainPage from "./components/MainPage/MainPage.js";
import Location from "./components/Location/Location.js"

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={MainPage}></Route>
      <Route exact path='/location' component={Location}></Route>
    </Switch>
  </BrowserRouter>
)


ReactDOM.render(<App />, document.getElementById("root"));