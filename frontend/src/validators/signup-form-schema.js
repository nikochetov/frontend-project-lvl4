import * as yup from 'yup';

const signupFormSchema = (t) => yup.object().shape({
  username: yup.string()
    .min(3, t('validation.min', { count: 3 }))
    .max(50, t('validation.max', { count: 50 }))
    .required(t('validation.required')),
  password: yup.string()
    .min(6, t('validation.min', { count: 3 }))
    .max(50, t('validation.max', { count: 50 }))
    .oneOf([yup.ref('passwordConfirmation'), null], t('validation.notEqualPasswords'))
    .required(t('validation.required')),
  passwordConfirmation: yup.string()
    .min(6, t('validation.min', { count: 6 }))
    .max(50, t('validation.max', { count: 50 }))
    .oneOf([yup.ref('password'), null], t('validation.notEqualPasswords'))
    .required(t('validation.required')),
});

export default signupFormSchema;
