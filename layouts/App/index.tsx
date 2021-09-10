import loadable from '@loadable/component';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

const LogIn = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Playground = loadable(() => import('@layouts/Playground'));
const PlaygroundUrl = loadable(() => import('@layouts/PlaygroundUrl'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/playgrounds" component={PlaygroundUrl} />
      <Route path="/:roomID" component={Playground} />

    </Switch>
  );
};

export default App;
