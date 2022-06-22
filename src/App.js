import { useContext, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import AboutPage from './pages/About/AboutPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AuthProvider, { AuthContext } from './store/authContext';

function App() {
  const data = useContext(AuthContext);
  console.log(data);
  return (
    <div>
      <div className='App'>
        <Header />
        <Switch>
          {/* negeneruoti route /about jei nesam prisilogine */}
          {data.isUserLoggedIn && (
            <Route path='/about'>
              <AboutPage />
            </Route>
          )}

          <Route exact path='/login'>
            {!data.isUserLoggedIn ? (
              <LoginPage logOut={data.logout} />
            ) : (
              <Redirect to='/about'></Redirect>
            )}
          </Route>
          <Route exact path='/register'>
            {!data.isUserLoggedIn ? (
              <RegisterPage logOut={data.logout} />
            ) : (
              <Redirect to='/about'></Redirect>
            )}
          </Route>

          {/* <Route exact path='/register'>
            <RegisterPage />
          </Route> */}
          <Route path='*'>
            <h2>404 Not found</h2>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
