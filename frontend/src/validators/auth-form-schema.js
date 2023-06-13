import * as yup from 'yup';

const authFormSchema = (t) => yup.object().shape({
  username: yup.string()
    .min(3, t('validation.min', { count: 3 }))
    .max(50, t('validation.max', { count: 50 }))
    .required('Обязательное поле'),
  password: yup.string()
    .min(6, t('validation.min', { count: 6 }))
    .max(50, t('validation.max', { count: 50 }))
    .required(t('validation.required')),
});

export default authFormSchema;
