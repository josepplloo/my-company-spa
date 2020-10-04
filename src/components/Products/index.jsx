import React from 'react';
import { Text, List, ListItem, Divider, } from 'react-md';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Product from './components/Product'
import { LINKS } from './constants';

export default function Products() {
  let { path, url } = useRouteMatch();

  return (
    <>
      <List>
        <Text type="subtitle-1">Products</Text>
        {
          LINKS.map(({ name, path, icon }, index) =>
            <div key={name}>
              <Link to={`${url}${path}`}>
                <ListItem id={`L-${path}`} leftAddon={icon}>{name}</ListItem>
              </Link>
              {index === 0 && <Divider />}
            </div>)
        }
      </List>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:productId`}>
          <Product />
        </Route>
      </Switch>
    </>
  );
}
