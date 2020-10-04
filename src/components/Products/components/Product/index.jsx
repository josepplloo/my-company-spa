import React from 'react';
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardHeader,
} from "@react-md/card";
import { Text } from 'react-md';

function Product() {
  const { productId } = useParams();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{productId}</CardTitle>
        <CardSubtitle>Subtitle</CardSubtitle>
      </CardHeader>
      <CardContent>
        <img src="https://picsum.photos/600/337?image=402" alt="" />
        <Text>
          Duis lacinia lectus sed enim placerat, non consequat arcu tincidunt.
          Pellentesque vel.
        </Text>
        <span><Text className="subtitle-2">Stock</Text><Text>1231</Text></span>
        <span><Text className="subtitle-2">Price</Text><Text>45454</Text></span>
      </CardContent>
    </Card>
  );
}

export default Product;
