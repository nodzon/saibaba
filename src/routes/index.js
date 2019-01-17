import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import CanHelp from '../screens/canHelp';
import NeedHelp from '../screens/needHelp';
import Home from '../screens/home';

export default () =>
  (<BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Home {...props} />} />
      <Route path="/canHelp" exact render={(props) => <CanHelp {...props} />} />
      <Route path="/needHelp" exact render={(props) => <NeedHelp {...props} />} />
    </Switch>
  </BrowserRouter>);
