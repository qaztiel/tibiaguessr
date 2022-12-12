// https://react-bootstrap.github.io/components/modal/
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ResultsModal() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Results</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>COMING SOON</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ResultsModal;