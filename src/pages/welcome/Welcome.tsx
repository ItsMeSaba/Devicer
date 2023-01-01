import { Link } from 'react-router-dom'; 

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './welcome.sass'

import i7 from './i74.png';

interface Args {

}

function Welcome(args: Args) {

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
                    <Link to='/devices'><p>Start <ArrowForwardIcon/></p></Link>
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