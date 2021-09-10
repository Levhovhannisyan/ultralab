import React, { useState } from "react";
import Create from './Create';
import Close from './images/close.png';
import Plus from './images/plus.png';



export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                <span>
                    <img src={Plus} alt="plus"/>
                </span>
                Add a new item
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <Create />
                        <button className="close-modal" onClick={toggleModal}>
                            <img src={Close} alt="close" />
                        </button>
                        <button className="closeNSave" onClick={toggleModal}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}