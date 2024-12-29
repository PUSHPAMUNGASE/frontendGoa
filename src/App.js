import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ModalBox from "./components/ModalBox";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <>
      <Navbar openModal={openModal} />
      <ModalBox
        showModal={showModal}
        closeModal={closeModal}
        modalType={modalType}
      />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
