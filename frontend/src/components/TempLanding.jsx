import { useEffect } from 'react';
import axios from 'axios';
import routes from '../routes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChannels, selectors } from '../slices/channelsSlice';

// const getAuthHeader = () => {
//   const userId = JSON.parse(localStorage.getItem('userId'));
//   return userId?.token ? { Authorization: `Bearer ${userId.token}` } : {};
// };

const TempLanding = () => {
  const dispatch = useDispatch();
  const channels = useSelector(selectors.selectAll);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(routes.dataPath(), {
  //       headers: getAuthHeader(),
  //     });
  //     console.log(response.data)
  //   };
  //
  //   fetchData();
  // }, []);
  useEffect(() => {
    dispatch(fetchChannels());
    console.log(channels)
  }, [dispatch]);

  return <div>PrivatePage</div>;
};

export default TempLanding;
