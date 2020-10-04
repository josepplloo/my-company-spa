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
import styles from './components/Product/styles.module.scss';

export default function Products() {
  const { path, url } = useRouteMatch();
  return (
    <Grid columns={3} tabletColumns={1} phoneColumns={1}>
      <GridCell colSpan={1}>
        <List>
          <Text type="subtitle-1" className={styles.productCategories}>Categories</Text>
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
      <GridCell colSpan={2}>
        <Switch>
          <Route exact path={path}>
            <Product />
          </Route>
          <Route path={`${path}/:categoryId`}>
            <Product />
          </Route>
        </Switch>
      </GridCell>
    </Grid>
  );
}
