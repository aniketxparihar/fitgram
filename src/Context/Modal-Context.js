import { useContext, createContext, useState, useEffect } from "react";


const ModalContext = createContext();
const ModalProvider = (props) => {
    const [modalEditProfileVisible, setModalEditProfileVisible] = useState("none");
    const [modalNewPostVisible, setModalNewPostVisible] = useState("none");
    return (
        <ModalContext.Provider value={{ modalNewPostVisible, setModalNewPostVisible, modalEditProfileVisible, setModalEditProfileVisible }}>
            {props.children}
        </ModalContext.Provider>
    )
}

const useModal = () => useContext(ModalContext);
export { useModal, ModalProvider };