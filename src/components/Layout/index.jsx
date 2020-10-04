import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Configuration, TabsManager, Tabs } from 'react-md';

import { PATHS, TAB_INDEX } from './constants';

function Layout({ children }) {
  const tabs = [
    {
      children: <Link to={PATHS.HOME}>HOME</Link>
    },
    {
      children: <Link to={PATHS.PRODUCTS}>PRODUCTS</Link>
    },
    {
      children: <Link to={PATHS.CLIENTS}>CLIENTS</Link>
    },
    {
      children: <Link to={PATHS.CONTACT}>CONTACT</Link>
    }
  ];

  const [tabIndex, setTabIndex] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    const newPathName = `/${pathname.split('/')[1]}`
    setTabIndex(TAB_INDEX[newPathName]);
  }, [pathname])

  return (
    <Configuration >
      <TabsManager tabs={tabs} tabsId="basic-usage-tabs" activeIndex={tabIndex} onActiveIndexChange={setTabIndex}>
        <Tabs padded={true} />
        {children}
      </TabsManager>
    </Configuration>
  );
}

export default Layout;
