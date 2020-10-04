import React from 'react';
import { Text, List, ListItem, Divider, Grid, GridCell } from 'react-md';
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
    <Grid columns={3} tabletColumns={1} phoneColumns={1}>
      <GridCell >
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
      </GridCell>
      <GridCell>
        <Switch>
          <Route exact path={path}>
            <Product />
          </Route>
          <Route path={`${path}/:productId`}>
            <Product />
          </Route>
        </Switch>
      </GridCell>
    </Grid>
  );
}
