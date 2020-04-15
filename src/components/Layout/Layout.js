import React, { useState } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import ErrorsPage from "../../containers/ErrorsPage/ErrorsPage";
import AdminPage from "../../containers/AdminPage/AdminPage";
import Servers from "../../containers/ServerList/ServerList";
import PendingData from "../../containers/PendingData/PendingData";

const Layout = () => {

  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  }

  const sideDrawerToggleHandler = () => {
    const currentShowSideDrawer = showSideDrawer;
    setShowSideDrawer(!currentShowSideDrawer);
  }

  return (
    <Auxiliary>
      <Toolbar drawerToggleClicked={() => sideDrawerToggleHandler()} />
      <SideDrawer
        open={showSideDrawer}
        closed={() => sideDrawerClosedHandler()} />
      <ErrorsPage />
      <AdminPage />
      <Servers />
      <PendingData />

    </Auxiliary>
  )
}


export default Layout;