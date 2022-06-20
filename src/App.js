import { Route, Switch } from 'react-router';
import './App.css';
import AboutPage from './pages/About/AboutPage';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
