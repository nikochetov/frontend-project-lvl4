import { useEffect } from 'react';
import axios from 'axios';
import routes from '../routes';

const getAuthHeader = () => {
  const userId = JSON.parse(localStorage.getItem('userId'));

  if (userId && userId.token) {
    return { Authorization: `Bearer ${userId.token}` };
  }

  return {};
};

const TempLanding = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(routes.dataPath(), {
        headers: getAuthHeader(),
      });
      console.log(response.data)
    };

    fetchData();
  }, []);
  return <div>PrivatePage</div>;
};

  export default TempLanding;
