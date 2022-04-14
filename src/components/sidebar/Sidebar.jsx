import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'
export default function Sidebar({ setNavopen }) {
    return (
        <div className='Sidebar'>
            <div onClick={() => { setNavopen((ps) => !ps) }} className="cancel">
                x
            </div>
            <div>
                <div className="nav">
                    <div>
                        <Link onClick={() => { setNavopen((ps) => !ps) }} to='/home'>Home</Link>
                    </div>
                    <div>
                        <Link onClick={() => { setNavopen((ps) => !ps) }} to='/about'>About</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
