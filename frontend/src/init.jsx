import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import resources from './locales';
import store from './slices';
import App from './components/App';
import { AuthProvider, SocketProvider, UserProvider } from './providers';

const init = async () => {
  const i18n = i18next.createInstance();
  await i18n.use(initReactI18next).init({ resources, fallbackLng: 'ru' });

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <UserProvider>
          <AuthProvider>
            <SocketProvider>
              <App />
            </SocketProvider>
          </AuthProvider>
        </UserProvider>
      </I18nextProvider>
    </Provider>
  );
};

export default init;
