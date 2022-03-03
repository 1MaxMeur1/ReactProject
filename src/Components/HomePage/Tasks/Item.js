import React from "react";
import { NavLink } from "react-router-dom";
import s from './Item.module.css'

const Item = (props) => {
    return (
        <div className={s.item}>
            <h4 className={s.title}>{props.name}</h4>
                <label className={s.content}>
                    <input className={s.checkbox} type="checkbox" />
                    <span className={s.mark}></span>
                </label>
        </div>
    )
}

export default Item