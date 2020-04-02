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
  const [showModal, setshowModal] = useState(true);
  const [showSideDrawer, setshowSideDrawer] = useState(false);

  // Για να κάνει την ενέργεια του οκ του Modal - Delete
  const modalOkHandler = (action,id) => {
    
    console.log("action : ");
    console.log(action);
    console.log("id : ");
    console.log(id);

    if (action === "Delete") {
      console.log("modalOkHandler clicked: " + action);
    } else if (action === "Edit") {
      console.log("modalOkHandler clicked: " + action);
    } else {
      console.log("modalOkHandler clicked: something not recognised");
    }
    modalClosedHandler();
  };

  // Για να κλείνει το modal :
  const modalClosedHandler = showModal => {
    // console.log('modalClosedHandler clicked: {0} ' , showModal);
    const currentshowModal = showModal;
    setshowModal(false);
  };

  // Για να κλείνει το sideDrawer:
  const showSideDrawerHandler = () => {
    console.log("showSideDrawerHandler clicked: " + showSideDrawer);
    const currentshowSideDrawer = showSideDrawer;
    setshowSideDrawer(false);
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
        <DeleteItem
          type="server"
          id={1}
          modalClosed={() => modalClosedHandler()}
          modalOk = {()=> modalOkHandler("edit",1)}
        />
      </Modal>
      <AdminPage />
      <Servers />
      <PendingData />
    </Auxiliary>
  );
};

export default layout;
