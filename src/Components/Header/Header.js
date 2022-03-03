import React from 'react'
import s from './Header.module.css'
import Image from './images/user.png'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return <div>
        <header className={s.header}>
            <NavLink className={s.link_title} to='/'><h1 className={s.title}>{props.hello}</h1></NavLink>
            <NavLink to="/profile">
                <img className={s.image} src={Image} alt='user'/>
            </NavLink>
        </header>
        <ul className={s.list}>
            <li className={s.item}>
                <NavLink className={s.link} to='/tasks'>Tasks</NavLink>
            </li>
            <li className={s.item}>
                <NavLink className={s.link} to='/tasks'>IELTS</NavLink>
            </li>
            <li className={s.item}>
                <NavLink className={s.link} to='/tasks'>Exercises</NavLink>
            </li>
            <li className={s.item}>
                <NavLink className={s.link} to='/tasks'>To-do list</NavLink>
            </li>
        </ul>
    </div>
}

export default Header