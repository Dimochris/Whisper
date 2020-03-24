import React,{useState} from "react";
import Auxiliary from "../../hoc/Auxiliary";
import ErrorsPage from "../../containers/ErrorsPage/ErrorsPage";
import AdminPage from "../../containers/AdminPage/AdminPage";
import Servers from "../../containers/ServerList/ServerList";
import PendingData from "../../containers/PendingData/PendingData";
import Modal from "../UI/Modal/Modal";
import DeleteItem from "../UI/DeleteItem/DeleteItem";

const layout = props => {
  
  const [showModal, setshowModal] = useState(false);

  const modalClosedHandler = (showModal) => {
    console.log("modalClosedHandler");
    const currentshowModal = showModal;
    setshowModal(!currentshowModal);
  };
  
  return (
    <Auxiliary>
      <div>Toolbar , SideDrawer, Backdrop</div>
      <main>{props.children}</main>
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
