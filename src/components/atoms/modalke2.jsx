import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="py-5">
            <Col xs={12} md={4} className="item-center">
              <div class="card bg-dark text-white" style={style}>
                <img src={Spiderman} alt="" />
                <div class="card-img-overlay">
                  <div class="container-fluid shadow"></div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <div className="my-4">
                <div className="judul">
                  <h2 className="text-white">Lorem ipsum dolor sit amet</h2>
                  <span className="text-white">Umur ⨀ Tanggal release ⨀ Genres ⨀ duration</span>
                </div>
                <div className="deskriptsi my-4">
                  <h3 className="text-white">Description</h3>
                  <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut rerum saepe provident non ab suscipit! Ex magni quis maiores architecto!</p>
                </div>
                <div className="details my-4">
                  <h3 className="text-white">Cast:</h3>
                  <h5 className="text-white">Jonny brad</h5>
                </div>
              </div>
              <div className="">
                <button className="judul bg-danger px-5 py-2 text-white border-white">Watch Trailer</button>
              </div>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
