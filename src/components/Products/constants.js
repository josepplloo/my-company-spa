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

export const PRODUCTS = {
  "products": [
    {
      "id": "p-000",
      "name": "Interdum et malesuada",
      "brand": "Morbi",
      "categories": ["Tech", "Office", "All"],
      "description": "Vestibulum fringilla nisi luctus finibus luctus.",
      "photo": "https://api.adorable.io/avatars/1000/30012.png",
      "price": "$327.01",
      "stock": "1034"
    },
    {
      "id": "p-001",
      "name": "Fames ac ante ",
      "brand": "Vestibulum",
      "categories": ["Tech", "All"],
      "description": "Donec vitae justo quis purus viverra lacinia ac vitae dolor.",
      "photo": "https://api.adorable.io/avatars/1000/30013.png",
      "price": "$372.04",
      "stock": "1055"
    },
    {
      "id": "p-002",
      "name": "Ipsum primis in faucibus",
      "brand": "Nullam",
      "categories": ["Services", "Office", "All"],
      "description": "Proin nec justo viverra, imperdiet dolor cursus, suscipit leo.",
      "photo": "https://api.adorable.io/avatars/1000/30014.png",
      "price": "$417.07",
      "stock": "1076"
    },
    {
      "id": "p-003",
      "name": "Nulla molestie nulla vel",
      "brand": "Cras",
      "categories": ["Tech", "Services", "All"],
      "description": "Nullam eget leo ullamcorper, fermentum elit nec, luctus ante.",
      "photo": "https://api.adorable.io/avatars/1000/30015.png",
      "price": "$462.10",
      "stock": "1097"
    },
    {
      "id": "p-004",
      "name": "Aliquam aliquam",
      "brand": "Morbi",
      "categories": ["Tech", "All"],
      "description": "Nunc posuere sem et magna viverra, ut maximus nisi fringilla.",
      "photo": "https://api.adorable.io/avatars/1000/30016.png",
      "price": "$507.13",
      "stock": "1118"
    },
    {
      "id": "p-005",
      "name": "Mi vel accumsan pellentesque",
      "brand": "Proin",
      "categories": ["Office", "All"],
      "description": "Etiam scelerisque leo ut lacus bibendum, a fermentum orci varius.",
      "photo": "https://api.adorable.io/avatars/1000/30017.png",
      "price": "$552.16",
      "stock": "1139"
    },
    {
      "id": "p-006",
      "name": "Felis turpis ullamcorper libero",
      "brand": "Donec",
      "categories": ["Services", "All"],
      "description": "Cras id risus sollicitudin, laoreet eros vel, eleifend orci.",
      "photo": "https://api.adorable.io/avatars/1000/30018.png",
      "price": "$597.19",
      "stock": "1160"
    },
    {
      "id": "p-007",
      "name": "At scelerisque",
      "brand": "Ut pulvinar",
      "categories": ["Tech", "Services", "Office", "All"],
      "description": "Sed pellentesque ligula sed lorem commodo sodales.",
      "photo": "https://api.adorable.io/avatars/1000/30019.png",
      "price": "$15.23",
      "stock": "1181"
    },
    {
      "id": "p-008",
      "name": "Arcu urna nec leo",
      "brand": "In bibendum",
      "categories": ["Tech", "Services", "Office", "All"],
      "description": "Morbi semper magna a condimentum pulvinar.",
      "photo": "https://api.adorable.io/avatars/1000/30020.png",
      "price": "$1217.25",
      "stock": "1202"
    },
    {
      "id": "p-009",
      "name": "Suspendisse vel porta",
      "brand": "Quisque",
      "categories": ["Office", "All"],
      "description": "Integer vitae ante interdum, faucibus nisi sed, volutpat nunc.",
      "photo": "https://api.adorable.io/avatars/1000/30021.png",
      "price": "$2412.27",
      "stock": "1223"
    },
    {
      "id": "p-0010",
      "name": "Donec arcu mi",
      "brand": "Praesent",
      "categories": ["Services", "All"],
      "description": "Cras in risus a risus consequat pretium non quis justo.",
      "photo": "https://api.adorable.io/avatars/1000/30022.png",
      "price": "$3614.29",
      "stock": "1244"
    },
    {
      "id": "p-0011",
      "name": "In viverra erat",
      "brand": "Aenean",
      "categories": ["Tech", "All"],
      "description": "Curabitur sodales augue ut dui lacinia, sit amet faucibus eros commodo.",
      "photo": "https://api.adorable.io/avatars/1000/30023.png",
      "price": "$1814.31",
      "stock": "1265"
    },
    {
      "id": "p-0012",
      "name": "Etiam suscipit",
      "brand": "Cras",
      "categories": ["Tech", "Office", "All"],
      "description": "In id nibh vel est rhoncus maximus ac vel risus.",
      "photo": "https://api.adorable.io/avatars/1000/30024.png",
      "price": "$1017.33",
      "stock": "0023"
    },
    {
      "id": "p-0013",
      "name": "Faucibus tincidunt",
      "brand": "Vivamus",
      "categories": ["Services", "Office", "All"],
      "description": "Curabitur sodales augue ut dui lacinia, sit amet faucibus eros commodo.",
      "photo": "https://api.adorable.io/avatars/1000/30025.png",
      "price": "$721.35",
      "stock": "0035"
    },
    {
      "id": "p-0014",
      "name": "Nec feugiat turpis",
      "brand": "Integer",
      "categories": ["Office", "All"],
      "description": "Vivamus id justo vel est condimentum ultrices ac a odio.",
      "photo": "https://api.adorable.io/avatars/1000/30026.png",
      "price": "$84.37",
      "stock": "0047"
    }
  ]
}
