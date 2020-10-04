import React from 'react';
import { ComputerSVGIcon, FormatListBulletedSVGIcon, BuildSVGIcon, FolderSVGIcon } from 'react-md';

export const LINKS = [
  {
    name: 'All',
    path: '',
    icon: <FormatListBulletedSVGIcon />
  },
  {
    name: 'Tech',
    path: '/tech',
    icon: <ComputerSVGIcon />
  },
  {
    name: 'Services',
    path: '/services',
    icon: <BuildSVGIcon />
  },
  {
    name: 'Office',
    path: '/office',
    icon: <FolderSVGIcon />
  },
];

export const API_URL = 'https://my-json-server.typicode.com/josepplloo/my-company-spa/db';
export const NOT_FOUND = 404