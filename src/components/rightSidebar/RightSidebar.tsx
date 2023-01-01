import React, { useState, useContext } from 'react'

import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { ChromePicker } from 'react-color'

import './rightSidebar.sass'
import { GlobalContext } from '../../context';

interface Args {
    openRight: boolean,
    setBgImage: (...args: any) => any,
    setBgColor: (...args: any) => any,
} 

function RightSidebar(args: Args) {
    const { setBgColor, openRight, setBgImage } = args;
    const { toggleBackgroundOptionsSidebar } = useContext(GlobalContext); 
    let [color, setColor] = useState('white');

    // function handle(color) {
    //     let { r, g, b } = color.rgb;
    //     setColor(color)
    //     setbgColor(`rgb(${r}, ${g}, ${b})`)
    // }

    return (
        <div className='rightSidebar' style={{ transform: `translateX(${openRight ? '0' : '105%'})` }}>
            <div className='closeIcon' onClick={toggleBackgroundOptionsSidebar}>
                <CloseIcon />
            </div>
            
            {/* <ChromePicker 
                // width={window.innerWidth > 2000 ? '400px' : 'initial'}
                disableAlpha={true}
                onChange={handle}
                color={color}
                style={{ width : '400px' }}
            /> */}

            <div className='bgImage'>
                <p>Background Image:</p>
                
                <input type="file" id="bgImage" onChange={e => {
                    if (!e?.target?.files?.[0]) return false;
                    
                    setBgImage(URL.createObjectURL(e.target.files[0]))
                }}/>
                
                <input type="submit" value='Remove' onClick={() => setBgImage('')}/>
            
                <div className="contactButton">
                    <Link to='/contact'>Contact Developer</Link>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar
