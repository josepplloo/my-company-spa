import React from 'react';
import { ComputerSVGIcon, FormatListBulletedSVGIcon, BuildSVGIcon, FolderSVGIcon } from 'react-md';

import styles from './components/Product/styles.module.scss';

export const LINKS = [
  {
    name: 'All',
    path: '',
    icon: <div className={styles.iconWrapper}><FormatListBulletedSVGIcon /></div>
  },
  {
    name: 'Tech',
    path: '/tech',
    icon: <div className={styles.iconWrapper}><ComputerSVGIcon /></div>
  },
  {
    name: 'Services',
    path: '/services',
    icon: <div className={styles.iconWrapper}><BuildSVGIcon /></div>
  },
  {
    name: 'Office',
    path: '/office',
    icon: <div className={styles.iconWrapper}><FolderSVGIcon /></div>
  },
];

export const API_URL = 'https://my-json-server.typicode.com/josepplloo/my-company-spa/db';
