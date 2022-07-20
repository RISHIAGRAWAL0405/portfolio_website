import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons"
import React from 'react'

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>Hackingfuture</a>
                    <div className="itemCointainer">
                        <Person className="icon" />
                        <span>7597649518</span>
                    </div>
                    <div className="itemCointainer">
                        <Mail className="icon" />
                        <span>rishiagrawal0405@gmail.com</span>
                    </div>
                </div>

                <div className="right">
                    <span className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </span>
                </div>
            </div>

        </div>
    )
}
