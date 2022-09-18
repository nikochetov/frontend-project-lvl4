import axios from 'axios';
import { batch } from 'react-redux';
import routes from '../routes';
import getAuthHeader from '../utils/get-auth-header';
import { actions as channelsActions } from '../slices/channelsSlice';
import { actions as messagesActions } from '../slices/messagesSlice';

export const fetchData = () => async (dispatch) => {
  const response = await axios.get(routes.dataPath(), {
    headers: getAuthHeader(),
  });
  const { channels, messages } = response.data;
  batch(() => {
    dispatch(channelsActions.addChannels(channels));
    dispatch(messagesActions.addMessages(messages));
  });
};

export default fetchData;
