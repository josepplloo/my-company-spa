import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Card, CardContent, CardTitle, CardHeader, } from "@react-md/card";
import { Text, TextContainer, Grid, GridCell } from 'react-md';

import { API_URL } from '../../constants';
import { filterByCategory, formatCategories, getLength } from './utils';
import styles from './styles.module.scss';

function Product() {
  const { categoryId } = useParams();
  const [appState, setAppState] = useState({
    loading: false,
    data: [],
    dataFiltered: [],
    showing: 0,
    hidden: 0
  });

  useEffect(() => {
    setAppState(state => ({ ...state, ...{ loading: true } }));
    fetch(API_URL).then((res) => res.json()).then(({ products }) => {
      setAppState(state => ({
        ...state,
        ...{
          loading: false,
          data: [...products],
          dataFiltered: [...products],
          showing: getLength(products),
        }
      }));
    });
  }, [setAppState]);

  useEffect(() => {
    const filteredProducts = filterByCategory({ data: appState.data, category: formatCategories(categoryId) });
    setAppState(state => ({
      ...state,
      ...{
        dataFiltered: [...filteredProducts],
        showing: getLength(filteredProducts),
        hidden: getLength(appState.data) - getLength(filteredProducts)
      }
    }));
  }, [categoryId, setAppState, appState.data])

  return (
    (appState.loading) ? <Text>Loading...</Text> :
      <>
        <Text className={styles.productCounter} type="body-2">
          Showing <span>{appState.showing}</span> products - Hidden: <span>{appState.hidden}</span>
        </Text>
        {
          appState.dataFiltered.map(({
            id,
            name,
            description,
            categories,
            photo,
            price,
            stock
          }) =>
            <Card key={id} className={styles.cardContainer}>
              <CardHeader className={styles.cardHeader}>
                <CardTitle>{name}</CardTitle>
                <Text className={styles.productCategories} type="body-2">{categories.join(', ')}</Text>
              </CardHeader>
              <CardContent className={styles.cardContent}>
                <Grid columns={3}>
                  <GridCell className={styles.imageContainer} colSpan={1}>
                    <img className={styles.image} src={photo} alt="product" />
                  </GridCell>
                  <GridCell className={styles.productInfoContainer} colSpan={2}>
                    <TextContainer>
                      <Text className={styles.productDescription} type="body-2">
                        {description}
                      </Text>
                      <Text className={styles.productInfo} type="body-2"><span>Stock:</span>{stock}</Text>
                      <Text className={styles.productInfo} type="body-2"><span>Price:</span>{price}</Text>
                    </TextContainer>
                  </GridCell>
                </Grid>
              </CardContent>
              {/* this div avoids extra padding added by react-md https://react-md.dev/packages/card/sassdoc#card-variable-rmd-card-content-padding-extra */}
              <div></div>
            </Card>
          )
        }
      </>
  );
}
export default Product;
