import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalDetails() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  // function handleShow(breakpoint) {
  //   setFullscreen(breakpoint);
  //   setShow(true);
  // }

  return (
    <>
      {values.map((v, idx) => ({
        /* <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Full screen
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button> */
      }))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header className="bg-danger" closeButton>
          <Modal.Title>Judul</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-secondary">Modal body content</Modal.Body>
      </Modal>
    </>
  );
}
