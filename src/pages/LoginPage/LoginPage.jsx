// import css from './LoginPage.module.css'

import { Redirect } from 'react-router';
import LoginForm from '../../components/LoginForm/LoginForm';

function LoginPage(props) {
  function handleSuccessLogin() {
    // TODO: redirect to about
    console.log('Redirectinam');

    console.log('LoginPage props', props);
  }

  return (
    <div>
      <h1>Login here</h1>
      <LoginForm onSuccessLogin={handleSuccessLogin} />
    </div>
  );
}
export default LoginPage;
