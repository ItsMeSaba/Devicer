import React from 'react'
import { Link } from 'react-router-dom'

import './contact.css';

import twitter from './images/twitter.png'
import gmail from './images/gmail.png'

function Contact() {
    return (
        <div className='contact'>
            <Link to='/'>
                <p className="backButton">Back</p>
            </Link>

            <a className="box" target='blank_' href='https://twitter.com/SSilagadze_'>
                <img src={twitter} />
            </a>

            <a className="box" target='blank_' href='https://mail.google.com/mail/?view=cm&fs=1&to=sbsilagadze@gmail.com'>
                <img src={gmail} />
            </a>
        </div>
    )
}

export default Contact
