import React from 'react';
import { HomeSVGIcon, FaceSVGIcon, CallSVGIcon, ComputerSVGIcon, FormatListBulletedSVGIcon, BuildSVGIcon, FolderSVGIcon } from 'react-md';

function createRoute(pathname, children, leftAddon, parentId = null) {
  return {
    itemId: pathname,
    parentId,
    to: pathname,
    children,
    leftAddon,
  };
}

const navItems = {
  '/': createRoute('/', 'Home', <HomeSVGIcon />),
  '/clients': createRoute('/clients', 'Clients', <FaceSVGIcon />),
  '/contact': createRoute('/contact', 'Contact', <CallSVGIcon />),
  '/products': createRoute('/products', 'Products', <FormatListBulletedSVGIcon />),
  '/tech': createRoute('/products/tech', 'Tech', <ComputerSVGIcon />, '/products'),
  '/services': createRoute('/products/services', 'Services', <BuildSVGIcon />, '/products'),
  '/office': createRoute('/products/office', 'Office', <FolderSVGIcon />, '/products'),
};

export default navItems;
