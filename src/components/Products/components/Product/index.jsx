import React from 'react';
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardHeader,
} from "@react-md/card";
import { Text, TextContainer, Grid } from 'react-md';
import styles from './styles.module.scss';

function Product() {
  const { productId } = useParams();

  return (
    <>
      <TextContainer>
        <Text>Showing 10 products - Hidden: 5</Text>
      </TextContainer>
      <Card>
        <CardHeader>
          <CardTitle>{productId}</CardTitle>
          <CardSubtitle>Subtitle</CardSubtitle>
        </CardHeader>
        <CardContent>
          <Grid columns={2}>
            <img className={styles.image} src="https://picsum.photos/600/337?image=402" alt="product" />
            <TextContainer>
              <Text type="body-2">
                Duis lacinia lectus sed enim placerat, non consequat arcu tincidunt.
                Pellentesque vel.
              </Text>
              <span>
                <Text type="subtitle-2">Stock:</Text>
                <Text>1231</Text>
              </span>
              <span>
                <Text type="subtitle-2">Price:</Text>
                <Text>45454</Text>
              </span>
            </TextContainer>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default Product;
