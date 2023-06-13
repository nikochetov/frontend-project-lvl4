import axios from 'axios';
import routes from '../routes';

const signupRequest = (signupData) => axios.post(routes.signupPath(), signupData);

export default signupRequest;
