import * as yup from 'yup';

const addChannelSchema = (t, channelsNames) => yup.string()
  .min(3, t('validation.range', { from: 3, to: 20 }))
  .max(20, t('validation.range', { from: 3, to: 20 }))
  .trim()
  .required(t('validation.required'))
  .notOneOf(channelsNames, t('validation.channelExist'));

export default addChannelSchema;
