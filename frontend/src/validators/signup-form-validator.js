import * as yup from 'yup';

const signupFormSchema = () => yup.object().shape({
  username: yup.string()
    .min(3, 'Не менее 3х символов')
    .max(50, 'Не более 50 символов')
    .required('Обязательное поле'),
  password: yup.string()
    .min(6, 'Не менее 3х символов')
    .max(50, 'Не более 50 символов')
    .oneOf([yup.ref('passwordConfirmation'), null], 'Пароли не совпад')
    .required('Обязательное поле'),
  passwordConfirmation: yup.string()
    .min(6, 'Не менее 6 символов')
    .max(50, 'Не более 50 символов')
    .oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
    .required('Обязательное поле'),
});

export default signupFormSchema;
