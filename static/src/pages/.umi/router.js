import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import Layout from '/Users/haywael/myProject/blog/static/src/layouts/index.js';


let Router = DefaultRouter;


export default function() {
  return (
<Router history={window.g_history}>
  <Layout><Switch>
    <Route exact path="/" component={require('../index.js').default} />
  </Switch></Layout>
</Router>
  );
}
