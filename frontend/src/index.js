import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import init from './init';

const initApp = async () => {
  const container = document.getElementById('root');
  const root = createRoot(container);
  const app = await init();
  root.render(app);
};

initApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
