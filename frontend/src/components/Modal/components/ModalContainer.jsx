import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import { actions as modalActions } from '../../../slices/modalSlice';
import getModal from './index';
import { SocketContext } from '../../../contexts';
import socketRequestKind from '../../../constants/socket-request-kind';

const ModalContainer = () => {
  const { isOpen, kind: modalKind, data } = useSelector((state) => state.modalsState);
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);

  const closeModal = () => {
    dispatch(modalActions.closeModal());
  };

  const submitModal = (value) => {
    const actionsMapping = {
      adding: () => socket.emit(socketRequestKind.newChannel, { name: value }),
      removing: () => socket.emit(socketRequestKind.removeChannel, { id: value }),
      renaming: () => socket.emit(
        socketRequestKind.renameChannel,
        { id: value.id, name: value.name },
      ),
    };

    actionsMapping[modalKind]();

    closeModal();
  };

  const renderModal = (kind) => {
    if (!kind) {
      return null;
    }

    const Component = getModal(kind);
    return <Component data={data} submitModal={submitModal} onHide={closeModal} isOpen={isOpen} />;
  };

  return renderModal(modalKind);
};

export default ModalContainer;
