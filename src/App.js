import React from 'react'
import s from './App.module.css'
import {Routes, Route} from 'react-router-dom';
import Profile from './Components/Header/Profile/Profile';
import LayOut from './Components/LayOut'
import HomePage from './Components/HomePage/HomePage'
import Messages from './Components/Messages/Messages'

function App(props) {
  return (
      <div className={s.wrapper}>
          <Routes>
            <Route path='/' element={<LayOut />}>
              <Route index element={<HomePage />}/>
              <Route path='profile' element={<Profile users={props.state.users} />}/>
              <Route path='messages/*' element={<Messages users={props.state.users}/>}/>
            </Route>
          </Routes>
      </div>
  );
}

export default App;
