import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Configuration, TabsManager, Tabs } from 'react-md';

import { PATHS, TAB_INDEX } from './constants';
import styles from './styles.module.scss';

function Layout({ children }) {
  const tabs = [
    {
      children: <Link className={styles.link} to={PATHS.HOME}>HOME</Link>
    },
    {
      children: <Link className={styles.link} to={PATHS.PRODUCTS}>PRODUCTS</Link>
    },
    {
      children: <Link className={styles.link} to={PATHS.CLIENTS}>CLIENTS</Link>
    },
    {
      children: <Link className={styles.link} to={PATHS.CONTACT}>CONTACT</Link>
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
        <Tabs padded={true} className={styles.tabs} />
        {children}
      </TabsManager>
    </Configuration>
  );
}

export default Layout;
