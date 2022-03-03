import React from 'react'
import s from './FriendsItem.module.css'
import { NavLink } from 'react-router-dom'

const FriendsItem = (props) => {
    return (
        <NavLink className={s.link} to={`/messages/${props.id}`}>
            <div className={s.item}>
                <img src={props.src} alt="avatar" />
                <span>{props.name}</span>
                <div className={`${s.circle} ${(props.isOnline) ? s.active : s.nonActive}`}></div>
            </div>
        </NavLink>
    )
}

export default FriendsItem