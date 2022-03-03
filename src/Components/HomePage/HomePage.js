import React from "react";
import s from './HomePage.module.css'
import Item from './Tasks/Item'

const HomePage = (props) => {
    const cards = props.cards.map(item => <Item text={item.text}/>)
    const link = React.createRef()
    const appendText = () => {
        let current = link.current.value
        alert(current)
    }
    return (
        <div className={s.content}>
            <h3>5 global tasks right now:</h3>
            <form className={s.form}>
                <button className={s.btn} onClick={appendText}>+</button>
                <button className={s.btn}>-</button>
                <textarea className={s.textarea} placeholder='Type here' ref={link}></textarea>
            </form>
            <div className={s.list}>
                {cards}
            </div>
        </div>
    )
}
export default HomePage