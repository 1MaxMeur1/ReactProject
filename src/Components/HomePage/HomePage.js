import React from "react";
import s from './HomePage.module.css'
import Item from './Tasks/Item'

const HomePage = () => {
    return (
        <div className={s.content}>
            <h3>5 global tasks right now:</h3>
            <div className={s.list}>
                <Item name='Learn English(C1) and pass IELTS'/>
                <Item name='Buy a car'/>
                <Item name='Update my pc'/>
                <Item name='Buy a better laptop'/>
                <Item name='Read 20 books this year'/>
            </div>
        </div>
    )
}
export default HomePage