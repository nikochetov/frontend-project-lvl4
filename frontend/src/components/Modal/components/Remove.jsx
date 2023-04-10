import {
  Button, Modal,
} from 'react-bootstrap';

const Remove = (props) => {
  const { onHide, submitModal, data } = props;

  return (
    <div
      className="modal show"
    >
      <Modal show onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Удаление канала</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Вы действительно хотите удалить канал
            {' '}
            <b>{data.name}</b>
            ?
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => onHide()}>Отмена</Button>
          <Button variant="danger" onClick={() => submitModal(data)}>Удалить</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Remove;
