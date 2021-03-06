import React from 'react';
import { TextContainer, Text } from 'react-md';

import styles from './Layout/styles.module.scss';

export default function Contact() {
  return (
    <TextContainer className={styles.textContainer}>
      <Text type="headline-4">Contact</Text>
    </TextContainer>
  );
}
