import React, { useState } from "react";

import { Modal, Button } from "react-bootstrap";


function SaveBtn({ type = "default", className, children, onClick }) {

    const [show, setShow] = useState(false);

    
    const handleClose = () => setShow(false);
  
    const handleShow = () => setShow(true);

    const click = () => {
        handleShow()
        onClick()
    };

    return (
        <>
            <button onClick={click} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
                {children}
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>You're book has been saved</Modal.Title>
                </Modal.Header>
                <Modal.Body>You can view your saved books in the Saved tab</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        OK
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SaveBtn;
