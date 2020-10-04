import React from 'react';
import { TextContainer, Text } from 'react-md';

import styles from './Layout/styles.module.scss';

export default function Clients() {
  return (
    <TextContainer className={styles.textContainer}>
      <Text type="headline-4">Clients</Text>
    </TextContainer>
  );
}
