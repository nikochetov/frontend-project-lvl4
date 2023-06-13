import axios from 'axios';
import routes from '../routes';

const loginRequest = (authData) => axios.post(routes.loginPath(), authData);

export default loginRequest;
