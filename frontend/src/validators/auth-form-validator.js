import * as yup from 'yup';

const authFormValidator = () => yup.object().shape({
  login: yup.string().min(3).max(50).required(),
  password: yup.string().min(3).max(50).required(),
});

export default authFormValidator;
