import { useLocation } from 'react-router-dom';
import authHeader from '../constants/auth-header';

const useAuthHeader = () => {
  const location = useLocation();
  const pathName = location.pathname.slice(1);
  return authHeader[pathName];
};

export default useAuthHeader;
