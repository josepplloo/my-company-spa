import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Card, CardContent, CardTitle, CardHeader, } from "@react-md/card";
import { Text, TextContainer, Grid, GridCell } from 'react-md';

import { API_URL, NOT_FOUND } from '../../constants';
import styles from './styles.module.scss';

function Product() {
  const { productId } = useParams();
  const [appState, setAppState] = useState({
    loading: false,
    data: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = API_URL;
    fetch(apiUrl).then((res) => res.json()).then((repos) => {
      setAppState({ loading: false, data: repos });
    });
  }, [setAppState]);

  return (
    (appState.loading | appState.data?.status === NOT_FOUND) ? <Text>Loading ...</Text> :
      <>
        <Text className={styles.productCounter} type="body-2">Showing <span>10</span> products - Hidden: <span>5</span></Text>
        <Card className={styles.cardContainer}>
          <CardHeader className={styles.cardHeader}>
            <CardTitle>Generic Concrete Computer {productId}</CardTitle>
            <Text className={styles.productCategories} type="body-2">Product category-1, category-2</Text>
          </CardHeader>
          <CardContent className={styles.cardContent}>
            <Grid columns={3}>
              <GridCell className={styles.imageContainer} colSpan={1}>
                <img className={styles.image} src="https://picsum.photos/600/337?image=402" alt="product" />
              </GridCell>
              <GridCell className={styles.productInfoContainer} colSpan={2}>
                <TextContainer>
                  <Text className={styles.productDescription} type="body-2">
                    Duis lacinia lectus sed enim placerat, non consequat arcu tincidunt.
                    Pellentesque vel.
                </Text>
                  <Text className={styles.productInfo} type="body-2"><span>Stock: </span>1231</Text>
                  <Text className={styles.productInfo} type="body-2"><span>Price:</span> 45454</Text>
                </TextContainer>
              </GridCell>
            </Grid>
          </CardContent>
          <div></div>
        </Card>
      </>
  );
}
export default Product;
