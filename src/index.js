import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import male from './Components/Header/Profile/images/user-male.png'
import female from './Components/Header/Profile/images/user-female.png'

const users = [
  {id: 1, name: 'Tomas Vernar', src:male, isOnline: true},
  {id: 2, name: 'Zouie Vexmart', src:female, isOnline: true},
  {id: 3, name: 'Linsie Mester', src:female, isOnline: false},
  {id: 4, name: 'Movich Kernel', src:male, isOnline: false},
]

ReactDOM.render(
    <BrowserRouter>
      <App users={users}/>
    </BrowserRouter>,
  document.getElementById('root')
);

