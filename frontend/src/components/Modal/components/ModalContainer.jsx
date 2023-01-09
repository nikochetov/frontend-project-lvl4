import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { actions } from '../../../slices/modalSlice';
import getModal from './index';

const ModalContainer = () => {
  const { isOpen, kind: modalKind, data } = useSelector((state) => {
    console.log('state::::::', state.modalsState)
    return state.modalsState
  });
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(actions.closeModal());
  };


  const submitModal = () => {}

  const renderModal = (kind) => {
    if (!kind) {
      return null;
    }

    console.log('condition true')
    const Component = getModal(kind);
    return <Component data={data} submitModal={submitModal} onHide={closeModal} isOpen={isOpen}/>;
  };

  console.log('rerender')
  return renderModal(modalKind);
};

export default ModalContainer;
