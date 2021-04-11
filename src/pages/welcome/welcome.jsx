import React from 'react'
import { Link } from 'react-router-dom'; 

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './welcome.css'

import i7 from './i74.png';

function Welcome({ setWelcome }) {
    return (
        <div className='welcome flexCenter'>
            <a 
                className='copyright' 
                title='Background Belongs to freepik.com' 
                target='blank_' 
                href='https://www.freepik.com/vectors/background'
            >
                ©
            </a>

            <div className="container">

                <div className="box">
                    <h1>Your Website <br/> on Different Devices</h1>
                    <p onClick={setWelcome}>Start <ArrowForwardIcon/></p>
                </div>

                <img src={i7} alt=""/>

            </div>

            <div className='contactButton'>
                <Link to='/contact'> Contact Developer </Link>
            </div>
        </div>
    )
}

export default Welcome