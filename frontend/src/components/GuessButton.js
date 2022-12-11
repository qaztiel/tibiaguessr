// https://react-bootstrap.github.io/components/buttons/

import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import ResultsModal from './Modal';
import Modal from 'react-bootstrap/Modal';

export function GuessButton() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div className='d-grid gap-2'>
            <Button 
                variant='primary'
                size='lg'
                onClick={handleShow}
            >
                Guess
            </Button>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
        
    )
}