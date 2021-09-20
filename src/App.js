
import './App.css';
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import Meetups from './components/Meetups'
import Login from './components/Login'
import NewPostForm from './components/NewPostForm'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/Profile' >
          <Profile />
        </Route>
        <Route path='/Login' >
          <Login />
        </Route>
        <Route path='/Meetups' >
          <Meetups />
        </Route>
        <Route path='/NewPostForm' >
          <NewPostForm />
        </Route>
      </Switch>
      <NavBar />
    </div>
  );
}

export default App;
