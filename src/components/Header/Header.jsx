import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../store/authContext';
import css from './Header.module.css';

function Header() {
  // useContext ir pagal isLoggedin rodom arba nerodom
  const data = useContext(AuthContext);
  return (
    <header className={css.header}>
      <nav>
        {data.isUserLoggedIn && (
          <NavLink className={css.navLink} to='/about'>
            About
          </NavLink>
        )}
        {!data.isUserLoggedIn && (
          <NavLink className={css.navLink} to='/login'>
            Login
          </NavLink>
        )}
        {!data.isUserLoggedIn && (
          <NavLink className={css.navLink} to='/register'>
            Register
          </NavLink>
        )}
        {data.isUserLoggedIn && (
          <NavLink className={css.navLink} to='/login'>
            Logout
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
