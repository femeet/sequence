import React, { useRef } from "react";
import ReactDom from "react-dom";
import './modal.css';

/***
 * Used reference from a Medium blog on
 * how to design a modal.
 * Link: https://javascript.plainenglish.io/how-to-create-a-popup-modal-in-react-39315907998e
 */

export const Modal = ({ action, modal, setShowModal }) => {
    
    // close the modal when clicking outside the modal.
    const modalRef = useRef();
    
    const confirm = () => {
        action(modal.row, modal.col, modal.card);
        setShowModal(false);
    }
    
    const closeModal = (e) => {
        if (e.target === modalRef.current) {
            setShowModal(false);
        }
    };
    
    return ReactDom.createPortal(
        <div className="container" ref={modalRef} onClick={closeModal}>
            <div className="modal">
                <div className={`modal-wrapper`}>
                    <h2>{modal.message}</h2>
                    <div className={`input`}>
                        <button onClick={confirm} className={`yes`}>Yes</button>
                        <button onClick={(e) => setShowModal(false)} className={`no`}>No</button>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("prompt")
    );
};

export default Modal;