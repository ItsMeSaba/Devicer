import React from 'react'
// import Header from '../../components/header/header'
import './welcome.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import i7 from './i7.png';

function Welcome({ setWelcome }) {
    return (
        <div className='welcome flexCenter'>
            {/* <h1 className='name'>Name</h1> */}

            <div className="container">

                <div className="box">
                    <h1>Your Website <br/> on Different Devices</h1>
                    <p onClick={setWelcome}>Start <ArrowForwardIcon/></p>
                </div>

                <img src={i7} alt=""/>

            </div>
        </div>
    )
}

export default Welcome