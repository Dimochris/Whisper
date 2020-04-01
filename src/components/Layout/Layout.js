import React, { useState } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import ErrorsPage from "../../containers/ErrorsPage/ErrorsPage";
import AdminPage from "../../containers/AdminPage/AdminPage";
import Servers from "../../containers/ServerList/ServerList";
import PendingData from "../../containers/PendingData/PendingData";
import Modal from "../UI/Modal/Modal";
import DeleteItem from "../UI/DeleteItem/DeleteItem";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = props => {
  const [showModal, setshowModal] = useState(false);
  const [showSideDrawer, setshowSideDrawer] = useState(false);

  const modalClosedHandler = showModal => {
    console.log("modalClosedHandler");
    const currentshowModal = showModal;
    setshowModal(!currentshowModal);
  }; 

  const showSideDrawerHandler = () => {
    console.log(showSideDrawer);
    const currentshowSideDrawer = showSideDrawer;
    setshowSideDrawer(!currentshowSideDrawer);
  };

  return (
    <Auxiliary>
      <Toolbar />
      <SideDrawer
        open={showSideDrawer}
        closed={() => showSideDrawerHandler()}
      />
      <ErrorsPage />
      <Modal show={showModal} modalClosed={() => modalClosedHandler()}>
        <DeleteItem type="server" id={1} />
      </Modal>
      <AdminPage />
      <Servers />
      <PendingData />
    </Auxiliary>
  );
};

export default layout;
