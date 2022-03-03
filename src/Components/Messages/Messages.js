import React from 'react'
import s from './Messages.module.css'
import Profile from '../Header/Profile/Profile'
import male from '../Header/Profile/images/user-male.png'
import female from '../Header/Profile/images/user-female.png'

const Messages = (props) => {
    return (
        <div className={s.content}>
            <Profile users={props.users}/>
            <div className={s.messages}>
                <h1 className={s.messages__title}>Messages:</h1>
                <div className={s.messages__item}>
                    <img src={male} alt="" />
                    <span>Max Verden</span>
                </div>
                <div className={s.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Asperiores fugit alias non minus accusantium in praesentium numquam aperiam et ea?
                </div>
                <form className={s.form}>
                    <textarea placeholder='Type message...'></textarea>
                    <button className={s.btn}>Enter</button>
                </form>
            </div>
        </div>
    )
}

export default Messages