import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from 'components/Layout';
import Home from 'components/Home';
import Clients from 'components/Clients';
import Contact from 'components/Contact';
import Products from 'components/Products';

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/clients" component={Clients} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Layout>
  );
}
