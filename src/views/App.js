import logo from './logo.svg';
import './App.scss';
import TodoComponent from '../components/Todo/TodoComponent';
import Navigaton from '../components/Navigation/Navigation';
import HomePage from '../components/HomePage/Home';
import UserComponent from '../components/User/UserCompnent';
import DetailCoponent from '../components/User/DetailComponent';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
    <Navigaton/>
        <img src={logo} className="App-logo" alt="logo" />
       <Switch>
        <Route exact path="/" >
          <HomePage/>
        </Route>
        <Route path="/todo">
        <TodoComponent/>
        </Route>
        <Route path="/user" exact={true}>
          <UserComponent/>
        </Route>
        <Route path='/user/:id'>
        <DetailCoponent/>
        </Route>
       </Switch>
      </header>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
