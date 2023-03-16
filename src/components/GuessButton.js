// https://react-bootstrap.github.io/components/buttons/

import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../style/Modal.css';
import '../style/GuessButton.css';

export function GuessButton() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div className='d-grid gap-2'>
            <Button id="guess-btn" 
                size='lg'
                onClick={handleShow}
            >
                GUESS
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Results</Modal.Title>
              </Modal.Header>
              <Modal.Body>COMING SOON</Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Guess Again
                </Button>
              </Modal.Footer>
            </Modal>
        </div>
        
    )
}