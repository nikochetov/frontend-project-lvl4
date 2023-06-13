import * as yup from 'yup';

const renameChannelSchema = (t) => yup.object().shape({
  body: yup.string()
    .min(3, t('validation.range', { from: 3, to: 20 }))
    .max(20, t('validation.range', { from: 3, to: 20 }))
    .required(t('validation.required')),
});

export default renameChannelSchema;
