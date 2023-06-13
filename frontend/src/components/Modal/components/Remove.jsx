import {
  Button, Modal,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Remove = (props) => {
  const { onHide, submitModal, data } = props;
  const { t } = useTranslation();

  return (
    <div
      className="modal show"
    >
      <Modal show onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{t('modal.removeChannel')}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            {t('modal.message.removeConfirm')}
            {' '}
            <b>{data.name}</b>
            ?
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => onHide()}>{t('actions.cancel')}</Button>
          <Button variant="danger" onClick={() => submitModal(data)}>{t('actions.remove')}</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Remove;
