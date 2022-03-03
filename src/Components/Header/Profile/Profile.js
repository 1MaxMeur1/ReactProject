import React from 'react'
import s from './Profile.module.css'
import FriendsItem from './FriendsItem/FriendsItem'
import male from './images/user-male.png'
import female from './images/user-female.png'

const Profile = (props) => {
    const users = props.users.map((item) => <FriendsItem id={item.id} src={item.src} isOnline={item.isOnline} name={item.name}/>)
    return <div className={s.container}>
        <div className={s.friends}>
            <h1 className={s.title}>My friends:</h1>
            <div className={s.list}>
                {users}
            </div>
        </div>
    </div>
}

export default Profile