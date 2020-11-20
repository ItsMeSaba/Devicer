import React, { useState } from 'react'
import './rightSidebar.css'
import CloseIcon from '@material-ui/icons/Close';

import { ChromePicker } from 'react-color'

function RightSidebar({ setbgColor, setOpenRight, openRight, setbgImage }) {
    let [color, setColor] = useState('white');

    function handle(color) {
        let { r, g, b } = color.rgb;
        setColor(color)
        setbgColor(`rgb(${r}, ${g}, ${b})`)
    }

    return (
        <div className='rightSidebar' style={{ transform: `translateX(${openRight ? '0' : '105%'})` }}>
            <div className='closeIcon' onClick={setOpenRight}>
                <CloseIcon />
            </div>
            
            <ChromePicker 
                width={window.innerWidth > 2000 ? '400px' : 'initial'}
                disableAlpha={true}
                onChange={handle}
                color={color}
                style={{ width : '400px' }}
            />

            <div className='bgImage'>
                <p>Background Image:</p>
                <input type="file" id="bgImage" onChange={e => {
                    setbgImage(URL.createObjectURL(e.target.files[0]))
                }}/>
                <input type="submit" value='Remove' onClick={() => setbgImage('')}/>
            </div>
        </div>
    )
}

export default RightSidebar
