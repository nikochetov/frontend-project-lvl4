import * as yup from 'yup';

const authFormSchema = () => yup.object().shape({
  username: yup.string()
    .min(3, 'Не менее 3х символов')
    .max(50, 'Не более 50 символов')
    .required('Обязательное поле'),
  password: yup.string()
    .min(6, 'Не менее 6 символов')
    .max(50, 'Не более 50 символов')
    .required('Обязательное поле'),
});

export default authFormSchema;
