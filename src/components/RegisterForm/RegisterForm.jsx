import css from '../LoginForm/LoginForm.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useContext } from 'react';
import { AuthContext } from '../../store/authContext';
import { myFetch } from '../../utils';

const initValues = {
  email: '',
  password: '',
  repeatPassword: '',
};

function RegisterForm() {
  const { login } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      email: Yup.string().email('Patikrinkite savo email').required(),
      password: Yup.string().min(4, 'Maziausiai 4 simboliai').max(7).required(),
      repeatPassword: Yup.string()
        .min(4, 'Maziausiai 4 simboliai')
        .max(7)
        .required()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
    onSubmit: async (values) => {
      // fetch or axios https://reqres.in/api/login
      // ir iskonsolinti atsakyma
      // console.log('submiting values ===', values);
      const valueCopy = { ...values };
      delete valueCopy['repeatPassword'];
      console.log(values);
      console.log(valueCopy);
      //   return;
      const result = await myFetch('https://reqres.in/api/register', 'POST', valueCopy);
      console.log('result', result);
      if (!result.token) {
        console.log('klaida');
        return;
      }
      // klaidos nera ir turim token
      // login() is kontexto ir paduosim token
      login(result.token);
      console.log('result ===', result);
    },
  });

  console.log('formik.touched ===', formik.touched);
  console.log('formik values ===', formik.values);
  console.log('formik errors ===', formik.errors);
  // console.log('formik.values ===', formik.values);

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className={formik.touched.email && formik.errors.email ? css.errorInput : ''}
        name='email'
        type='text'
        placeholder='Your email'
      />
      {formik.touched.email && formik.errors.email && (
        <p className={css.errorMsg}>{formik.errors.email}</p>
      )}
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        className={formik.touched.password && formik.errors.password ? css.errorInput : ''}
        name='password'
        type='password'
        placeholder='Your password'
      />
      {formik.touched.password && formik.errors.password && (
        <p className={css.errorMsg}>{formik.errors.password}</p>
      )}
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.repeatPassword}
        className={
          formik.touched.repeatPassword && formik.errors.repeatPassword ? css.errorInput : ''
        }
        name='repeatPassword'
        type='repeatPassword'
        placeholder='RepeatPassword'
      />
      {formik.touched.repeatPassword && formik.errors.repeatPassword && (
        <p className={css.errorMsg}>{formik.errors.repeatPassword}</p>
      )}
      <button type='submit'>Login</button>
    </form>
  );
}

export default RegisterForm;
