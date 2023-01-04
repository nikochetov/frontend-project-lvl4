import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import { io } from 'socket.io-client';
import resources from './locales';
import store from './slices';
import App from './components/App';
import UserProvider from './providers/user-provider';
import AuthProvider from './providers/auth-provider';

const init = async () => {
  const i18n = i18next.createInstance();
  await i18n.use(initReactI18next).init({ resources, fallbackLng: 'ru' });
  const socket = io();

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
          <UserProvider>
            <AuthProvider>
            <App />
            </AuthProvider>
          </UserProvider>
      </I18nextProvider>
    </Provider>
  );
};

export default init;
