import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Wallet from '../CreditCard';

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Пополнить кошелёк
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Wallet/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
}