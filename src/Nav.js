import React, {useEffect, useState} from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="https://rdmagazine.files.wordpress.com/2018/10/netflix-logo.jpg" alt="Netflix" />
            <img className="nav__avatar" src="https://images.unsplash.com/photo-1588658851183-236ed730a3c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="Netflix" />
        </div>
    )
}

export default Nav
