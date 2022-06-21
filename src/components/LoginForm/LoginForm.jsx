import { useFormik } from 'formik';

const initValues = {
  email: '',
  password: '',
};
function LoginForm() {
  const formik = useFormik({
    initialValues: initValues,
  });

  return (
    <form>
      <input type='text' placeholder='Your email' />
      <input type='password' placeholder='Your password' />
      <button type='submit'>Login</button>
    </form>
  );
}

export default LoginForm;
