import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import { io } from 'socket.io-client';
import resources from './locales';
import store from './slices';
import App from './components/App';
import { AuthProvider, UserProvider, SocketProvider } from './providers';
import socketRequestKind from './constants/socket-request-kind';
import { actions as messagesActions } from './slices/messagesSlice';
import { actions as channelsActions } from './slices/channelsSlice';

const rollbarConfig = {
  accessToken: '5cffcc788b104824a96aafaf03396fcf',
  environment: 'testenv',
};

const init = async () => {
  const i18n = i18next.createInstance();
  await i18n.use(initReactI18next).init({ resources, fallbackLng: 'ru' });
  const socket = io({
    autoConnect: false,
  });

  // socket.on('connect', () => {
  //   console.log(socket.id); // "G5p5..."
  // });
  socket.on(socketRequestKind.newMessage, (ev) => {
    store.dispatch(messagesActions.addMessage(ev));
  });
  socket.on(socketRequestKind.newChannel, (ev) => {
    store.dispatch(channelsActions.addChannel(ev));
    store.dispatch(channelsActions.setCurrentChannelId(ev.id));
  });
  socket.on(socketRequestKind.renameChannel, (ev) => {
    store.dispatch(channelsActions.renameChannel(ev));
  });
  socket.on(socketRequestKind.removeChannel, (ev) => {
    store.dispatch(channelsActions.removeChannel(ev));
    store.dispatch(channelsActions.setCurrentChannelId(1));
  });

  return (
    <RollbarProvider config={rollbarConfig}>
      <ErrorBoundary>
        <StoreProvider store={store}>
          <I18nextProvider i18n={i18n}>
            <UserProvider>
              <AuthProvider>
                <SocketProvider socket={socket}>
                  <App />
                </SocketProvider>
              </AuthProvider>
            </UserProvider>
          </I18nextProvider>
        </StoreProvider>
      </ErrorBoundary>
    </RollbarProvider>
  );
};

export default init;
