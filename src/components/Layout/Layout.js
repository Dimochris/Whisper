import React from "react";
import Auxiliary from '../../hoc/Auxiliary';
import ErrorsPage from "../../containers/ErrorsPage/ErrorsPage";
import AdminPage from '../../containers/AdminPage/AdminPage';
import Servers from '../../containers/ServerList/ServerList';
import PendingData from '../../containers/PendingData/PendingData';
const layout = props => (
  <Auxiliary>
    <div>Toolbar , SideDrawer, Backdrop</div>
    <main>{props.children}</main>
    <ErrorsPage/>
    <AdminPage/>
    <Servers/>
    <PendingData/>
  </Auxiliary>
);
export default layout;
