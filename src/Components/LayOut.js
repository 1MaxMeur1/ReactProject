import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import s from './LayOut.module.css'

const LayOut = () => {
    return <div className={s.wrapper}>
        <div className={s.h}>
            <Header hello='Hello'/>
        </div>

        <div className={s.content}>
            <Outlet />
        </div>
        
        {/* <footer className={s.footer}>
            2018
        </footer> */}
    </div>
}

export default LayOut