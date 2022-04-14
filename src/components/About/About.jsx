import React from 'react'
import { useState } from 'react'
import './About.scss'
export default function About() {
    const [Item, setItem] = useState('app');
    return (
        <div className="About">
            <div className="about-content">
                <div className="app-n-author">
                    <h1 onClick={() => { setItem('app') }}>App</h1>
                    <h1 onClick={() => { setItem('author') }}>Author</h1>
                </div>
                <div className='details'>
                    {
                        Item === 'app' ?
                            <div>
                                <h1>
                                App
                                </h1>
                                <p>This is a Todo App made with React along with Styled Components.In this app you can add, delete Todos and even can mark them as Completed or Not Completed. </p>
                            </div>
                            :
                            <div>
                                <h1>
                                Author
                                </h1>
                                <p>This App is developed by a MERN Stack Developer and a Final year Engineering student.</p>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
