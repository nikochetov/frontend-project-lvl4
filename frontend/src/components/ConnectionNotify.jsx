import { toast, ToastContainer } from 'react-toastify';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useSocketCondition from '../hooks/useSocketCondition';
import SocketConnectionCondition from '../constants/socket-connection-condition';

const notify = (condition, t) => {
  const conditionMapping = {
    [SocketConnectionCondition.connect]: () => toast.success(t('connectNotification.success'), {
      position: toast.POSITION.TOP_RIGHT,
    }),
    [SocketConnectionCondition.error]: () => toast.error(t('connectNotification.error'), {
      position: toast.POSITION.TOP_RIGHT,
    }),
  };

  if (conditionMapping[condition]) {
    conditionMapping[condition]();
  }
};

const ConnectionNotify = () => {
  const { t } = useTranslation();
  const socketCondition = useSocketCondition();

  React.useEffect(() => {
    notify(socketCondition, t);
  }, [socketCondition]);

  return <ToastContainer />;
};

export default ConnectionNotify;
