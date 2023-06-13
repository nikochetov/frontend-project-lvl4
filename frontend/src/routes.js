import { buildPath } from './utils';
import API_PATH from './constants/API_PATH';
import Paths from './constants/Paths';

export default {
  loginPath: () => buildPath(API_PATH, Paths.login),
  signupPath: () => buildPath(API_PATH, Paths.signup),
  dataPath: () => buildPath(API_PATH, Paths.data),
};
