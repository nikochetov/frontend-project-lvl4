import * as yup from 'yup';

const authFormSchema = () => yup.object().shape({
  login: yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
  password: yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
});

export default authFormSchema;
