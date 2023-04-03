import UserContext from '../contexts/user-context';
import getUser from '../utils/get-user';

const UserProvider = ({ children }) => {
  const user = getUser();
  return (
    <UserContext.Provider value={user}>
      { children }
    </UserContext.Provider>
  );
};

export default UserProvider;
